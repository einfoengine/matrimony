import React from 'react';
import Image from 'next/image';

const ImageBox = ({imgSrc, altText, imgWidth, imgHeight, imgClass, title, subTitle, text}:{
  imgSrc: string,
  altText: string,
  imgWidth: string,
  imgHeight: string | 'auto',
  imgClass: string,
  title?: string,
  subTitle?: string,
  text?: string
}) => {
  return (
    <div className='ex-element'>
      <Image 
        src={imgSrc}
        alt={altText}
        width={imgWidth}
        height={imgHeight}
        className={`ex-${imgClass}`}
      />
      {title && <h3 className='ex-element-title'>{title}</h3>}
      {subTitle && <h5 className='ex-element-sub-title'>{subTitle}</h5>}
      {text && <p className='ex-paragraph'>{text}</p>}
    </div>
  )
}

export default ImageBox