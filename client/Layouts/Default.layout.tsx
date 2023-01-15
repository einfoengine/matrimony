import React, { useEffect, useState } from 'react'
// import scriptT
import Section from '../Elements/Section'
import Row from '../Elements/Row'
import Col from '../Elements/Column'


import type { layoutPayload } from '../types/global.type'
import Logo from '../Elements/Logo'
import Paragraph from '../Elements/Paragraph'
import ModuleTitle from '../Elements/ModuleTitle'

import MainNav from '../components/MainNav'
import Login from '../components/Login'

// import bootstrapJs from '../node_modules/bootstrap/dist/js/bootstrap.min'

const Default = ({layoutPayload}:{layoutPayload: layoutPayload}) => {
  const [isLoginState, setIsLoginState] = useState({})
  // const script = document.createElement('script');
  useEffect(()=>{
    // const isLogedin = JSON.parse(window.localStorage.getItem("user"));
    setIsLoginState( JSON.parse(window.localStorage.getItem("user")));
  }, [])
  
  return (
    <>
      {
        layoutPayload.map((section:any, index: number)=>
          <Section
            key={section.id != undefined ? 'ex-section-'+section.id : 'ex-section-'+section.name}
            id={section.id != undefined ? 'ex-section-'+section.id : 'ex-section-'+section.name}
            className={'ex-section '+section.className!=="undefined"&&section.className}
            container={section.type}
          >
            {section.rows.map((row:any, index:number)=>{
              let rowNumber = `ex-${section.name}-${index}`
              return(<Row 
              key={`ex-${section.name}-${index}`} 
              id={rowNumber}
              className={`ex-row-${index}`}>
                {
                  row.cols.map((col:any, index:number)=>
                  <Col 
                  key={`${section.name}-${row.id}-'col-'${index}`} 
                  className={`ex-col ${rowNumber+'-col-'+index} col-${col.span}`}
                  >
                      {col.components}
                    </Col>
                  )
                }
              </Row>)
            }
            )}
          </Section>
        )
      }
      <Section id='ex-sec-footer' className='ex-section ex-sec-footer bg-light' container='fixed'>
        <Row id='ex-row-footer-1' className='ex-row-footer-1 ex-row'>
          <Col className='col-3'>
            <Logo text='Pakhi Bhai'/>
            <Paragraph>
              Welcome to pakhi bhai, your most trustworthy plaform to find your perfect match.
            </Paragraph>
          </Col>
          <Col className='col-3'>
            <ModuleTitle>Contact Us</ModuleTitle>
            <ul>
              <li>Dhaka, Bangladesh</li>
              <li>+88 01714028277</li>
              <li>info@pakhibhai.com</li>
            </ul>
          </Col>
          <Col className='col-3'>
            <ModuleTitle>Links</ModuleTitle>
            <ul>
              <li>How it works</li>
              <li>Get to know us</li>
              <li>Reead our blogs</li>
            </ul>
          </Col>
          <Col className='col-3'>
            <ModuleTitle>Stay connected</ModuleTitle>
            <ul>
              <li>FaceBook</li>
              <li>Youtube</li>
              <li>Newsletter</li>
            </ul>
          </Col>
        </Row>
      </Section>
    </>
  )
}

export default Default