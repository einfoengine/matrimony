import React from 'react'

const Column = (props:{
  className?: string,
  // position: 'a' | 'b' | 'c' | 'd',
  children: JSX.Element | JSX.Element[],
  // children: any,
  // grid: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}) => {
  return (
    <div className={`ex-column ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Column