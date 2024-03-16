import React from "react"
import {Zoom,Slide, Fade} from 'react-slideshow-image'
import SimpleImageSlider from "react-simple-image-slider";

export default function Rewards(){
    const images=[
       
        {
            url:"reward1.jpg"
        },
        {
            url:"reward2.jpg"
        },
        {
            url:"reward3.webp"
        },
        {
            url:"reward4.webp"
        },
        {
            url:"reward5.webp"
        },
        {
            url:"reward6.webp"
        },
    ]

    return(
        <div className="rwd">
            <h1 style={{textAlign:"center"}}>Achivments</h1>
           <div className="rewards">
            <SimpleImageSlider
                width={500}
                height={300}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                loop={true}
                autoPlayDelay={3.0}
                className="rwd"
            />
           </div>
        </div>
    )
}