import React from 'react'
import ImageBox from "../../Elements/ImageBox"

const Features = ({
    className,
    title
}:{
    title?:string,
    className?:string
}) => {
  return (
    <div className={`ex-component ex-features text-center ${className}`}>
        {title!=='undefined'&&<h2 className='ex-component-title'>{title}</h2>}
        <div className="row">
            <div className="col col-4 ex-feature">
                <ImageBox 
                    imgSrc="/images/register.png"
                    imgClass="ex-feature-icon" 
                    altText="Register icon"
                    imgWidth="100"
                    imgHeight="100"
                    title="Register"
                    subTitle="Its free! find your mate"
                />
            </div>
            <div className="col col-4 ex-feature">
                <ImageBox 
                    imgSrc="/images/connect.png"
                    imgClass="ex-feature-icon" 
                    altText="Get connected icon"
                    imgWidth="100"
                    imgHeight="100"
                    title="Connect"
                    subTitle="Get connected"
                />
            </div>
            <div className="col col-4 ex-feature">
                <ImageBox 
                    imgSrc="/images/interact.png"
                    imgClass="ex-feature-icon" 
                    altText="Register icon"
                    imgWidth="85"
                    imgHeight="100"
                    title="Interact"
                    subTitle="Move forward"
                />
            </div>
        </div>
    </div>
  )
}

export default Features