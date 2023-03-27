import { useContext, useEffect } from 'react';

import type { NextPage } from 'next'
import Head from 'next/head'
import Default from '../Layouts/Default.layout'

import type { layoutPayload } from '../types/global.type'
import Hero from '../components/Hero/Index'
import AdvanceSearch from '../components/AdvanceSearch'
import Features from '../components/Features'
import CallToAction from '../components/CallToAction'
import Videos from '../components/Videos'
import { LoginContext } from '../context';
import RecentUsers from '../components/RecentUsers';




const payload:layoutPayload = [
  {
    id:'hero',
    name: "hero",
    className: "no-padding",
    type: 'fluid',
    rows: [
      {
        cols:[
          {
            components: <>
            <Hero 
              className='ex-hero'
              childWrapClass='ex-jumbotron text-center' 
              title='We help in match making' 
              subTitle="It    's easy to find and connect with your better half"
              text='If you need you may get help of our experienced councilor'
              link='#'
              colorOverly='rgba(0,0,0,0.5)'
              backgroundImage='bg.jpg'
            /></>
          },
        ]
      },
    ],
  },
  {
    id:'advance-search',
    name: "advance-search",
    className: "",
    type: 'fixed',
    rows: [
      {
        cols:[
          {
            className: '',
            components: <AdvanceSearch className='eie-advanced-search rounded p-3 mt-4'/>
          },
        ]
      },
    ],
  },
  {
    id:'ex-features',
    name: "ex-features",
    className: "ex-features",
    type: 'fixed',
    rows: [
      {
        cols:[
          {
            className: '',
            components: <Features
              title='Get started'
            />
          },
        ]
      },
    ],
  },
  {
    id:'ex-cta-1',
    name: "cta",
    className: "mt-4",
    type: 'fixed',
    rows: [
      {
        cols:[
          {
            components: <CallToAction
              className="text-center ex-bg-primary-gradiant ex-text-white p-4"
              title='Connect your perfect match'
              bigText='1700'
              subTitle='brids around you'
              action='#'
              btnText='Make an account'
            />
          }
        ]
      },
    ],
  },
]

// let b = new String("amit");


const Home: NextPage = () => {
  
  return (
    <div>
      <Default layoutPayload = {payload}/> 
    </div>
  )
}

export default Home
