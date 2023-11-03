import React from 'react'
import { useEffect, useState } from "react";
import * as pkg from '@builder.io/react'
const {useIsPreviewing,BuilderComponent,builder} = pkg

import { useParams } from 'react-router';
import Banner from './Banner';
// Put your builder API key here

export default function MainC() {
    const isPreviewingInBuilder = useIsPreviewing();
    const [notFound, setNotFound] = useState(false);
    const [content, setContent] = useState(null);
    const { slug } = useParams();

    // get the page content from Builder


    useEffect(()=>{
        // console.log('xc ')
        builder.init('2b9905c0600e411ab19676aebe792708')
    })
    useEffect(() => {

        async function fetchContent() {

            try {
                const content = await builder.get('page', {
                    url: window.location.pathname
                }).promise();

                //dynamically renders tab title from builder.io page field 
                // document.title = content.data.title;

                setContent(content);
                console.log(content,"jj")
                setNotFound(!content);
            } catch (error) {
                console.log("error", error);
            }

        }
        console.log(slug)
        fetchContent();
    }, [slug]);

    // if no page is found, return a 404 page
    if (notFound && !isPreviewingInBuilder) {
        return <div>Not Found 404 Error</div>
    }

    return (
        <>
        {/* <Banner heading={undefined}/> */}
            <BuilderComponent model="page" content={content} />
        </>
    )
}