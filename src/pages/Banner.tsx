import React from 'react';

import * as pkg from '@builder.io/react'
const {Builder} = pkg


const Banner = ({heading}) => {

    return (
     <>
     {
        heading &&    <div>
            <img src={heading} style={{width:"400px"}} alt='headin'/>
        </div>  

     }
        {/* {heading} */}
     </>
    )
}

Builder.registerComponent(Banner, { 
    name: 'Banner',
    inputs: [{ name: 'heading', type: 'file' },

            ],
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png'
  })

export default Banner;