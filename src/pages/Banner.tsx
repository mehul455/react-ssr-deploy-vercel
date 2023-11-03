import React from 'react';

import * as pkg from '@builder.io/react'
const {Builder} = pkg



const Banner = ({heading}) => {

    return (
     <>
     <h1>
        {heading}
     </h1>
     </>
    )
}

Builder.registerComponent(Banner, { 
    name: 'Banner',
    inputs: [{ name: 'heading', type: 'string' },

            ],
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png'
  })

export default Banner;