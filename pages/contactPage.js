import React from 'react'
import Head from 'next/head'
import BasicLayout from '../layouts/BasicLayout/BasicLayout'
import Contact from '../components/contact'


export default function ContactPage() {
  return (
    <>
    <Head>      
      <title>
       services
      </title>
    </Head>
    
    <BasicLayout>
      <section className="section__page">
        <Contact/>
      </section>
    </BasicLayout>
    </>
  )
}