import { type } from 'os';
import React from 'react'

const Section = (props:{
  id: string
  className: string,
  container: 'fixed' | 'fluid',
  children: JSX.Element|JSX.Element[]
}) => <section id={props.id} className={`ex-section ${props.className}`}><div className={`ex-container ${props.container!='fluid'?'container':'container-fluid'}`}>{props.children}</div></section>

export default Section