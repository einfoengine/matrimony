import { useContext, useEffect } from "react";
import axios from 'axios';
import { LoginContext, LoginProvider } from "../context";
import Head from "next/head";


import Section from '../Elements/Section'
import Row from '../Elements/Row'
import Col from '../Elements/Column'
import MainNav from '../components/MainNav'
import Login from '../components/Login'
import Logo from "../Elements/Logo";
import Paragraph from "../Elements/Paragraph";
import ModuleTitle from "../Elements/ModuleTitle";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/style.scss'


import type { AppProps } from 'next/app'
import { Value } from "sass";

// axios.defaults.baseURL = 'http://localhost:3000';


function MyApp({ Component, pageProps }: AppProps) {
  const login = useContext(LoginContext);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></script>
      </Head>
      <div className="body">
        <LoginProvider>
          <Section id='ex-top' className='ex-top no-padding' container='fixed'>
            <Row id='ex-row-top' className='align-items-center'>
              <Col className="col-2">
                <span>
                  +8801714028277
                </span>
              </Col>
              <Col className="col-6">
                <span>
                  House 36, Road 14/A, Dhanmondi Dhaka.
                </span>
              </Col>
              <Col className="col-4">
                <span>
                  Find us on: 
                </span>
              </Col>
            </Row>
            <Row id='ex-row-top' className='align-items-center'>
              <Col className='col-2'>
                <h1>Pakhi Bhai</h1>
              </Col>
              <Col className='col-7'> 
                <MainNav />
              </Col>
              <Col className='col-3'>
                <Login />
              </Col>
            </Row>
          </Section>
          <Component {...pageProps} />
        </LoginProvider>
        
        {/* Footer */}
        <Section id='ex-sec-footer' className='ex-section ex-sec-footer' container='fixed'>
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
      </div>
    </>
  )
}

export default MyApp
