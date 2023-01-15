import React from 'react'

const SubHeading = ({className, text}:{ className?:string, text:string}) => {
  return (
    <h4 className={`ex-element ex-sub-heading ${className}`}>{text}</h4>
  )
}

export default SubHeading