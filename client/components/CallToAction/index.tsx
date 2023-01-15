import React from 'react'
import Heading from '../../Elements/Heading'
import SubHeading from '../../Elements/SubHeading'

const CallToAction = ({
  className, title, bigText, subTitle, paragraph, action, btnText}:{
    className?: string,
    title?: string,
    bigText: string,
    subTitle?: string,
    paragraph?: string,
    action: string,
    btnText: string
  }) => {
  return (
    <div className={`ex-cta rounded ex-component ex-call-to-action ${className}`}>
      {title&&<Heading title={title} />}
      <h2 className='ex-big-text'>{bigText}</h2>
      {subTitle&&<SubHeading text={subTitle}/>}
      {paragraph&&<p>{paragraph}</p>}
      <a className='btn btn-primary' href={action}>{btnText}</a>
    </div>
  )
}

export default CallToAction