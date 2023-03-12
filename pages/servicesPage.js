import React from 'react'
import Head from 'next/head'
import BasicLayout from '../layouts/BasicLayout/BasicLayout'
import Services from '../components/services'

import 'animate.css'



export default function ServicesPage() {


  return (
    <>
    <Head>      
      <title>
       services
      </title>
    </Head>
    
    <BasicLayout>
      <section className="section__services-page">
        <Services/>
      </section>
    </BasicLayout>
    </>
  )
}


