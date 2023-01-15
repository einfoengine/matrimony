import React from 'react'

const Module = ({
  moduleName,
  moduleTitle: {
    title,
    visibility,
    titleClass
  },
  moduleBodyFunction,
}:{
    moduleName: string,
    moduleTitle:{
      title: string,
      visibility: 'show' | 'hide',
      titleClass?: string
    },
    moduleBodyFunction: any
  }) => {
  return (
    <div className='ex-module'>
      <h3 className={`ex-module-title ex-${titleClass}`}>{visibility==='show' && title}</h3>
      {moduleBodyFunction}
    </div>
  )
}

export default Module