import { type } from 'os';
import React from 'react';

const Row = ({className, children}:{
  id:string,
  className?: string,
  children: JSX.Element | JSX.Element[]
}) => {
  return (
    <div className={`ex-row row ${className}`}>
          {children}
    </div>
  )
}

export default Row