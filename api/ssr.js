import fs from "node:fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create server for production only
const handler = async (req, res) => {
  try {
    const url = req.url;

    let template;
    let render;
    let manifest;

    // Always read fresh template in development
    const htmlFilePath = join(__dirname, "..", "dist/client", "index.html");
    const serverFilePath = join(
      __dirname,
      "..",
      "dist/server",
      "entry-server.js"
    );
    const ssrManifestFilePath = join(__dirname, "..", "dist/client", "ssr-manifest.json");

    template = await fs.readFile(htmlFilePath, "utf-8");
    render = (await import(serverFilePath)).render;
    manifest = await fs.readFile(ssrManifestFilePath, "utf-8");

    const rendered = await render(url, manifest);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? "")
      .replace(`<!--app-html-->`, rendered.html ?? "");

    // Set headers
    res.setHeader("Content-Type", "text/html");

    res.status(200).send(html);
  } catch (e) {
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
};

export default async (req, res) => {
  return await handler(req, res);
};
