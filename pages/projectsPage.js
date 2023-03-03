import React from 'react'
import Head from 'next/head'
import BasicLayout from '../layouts/BasicLayout/BasicLayout'
import Projects from '../components/projects'
import 'animate.css'



export default function ProjectsPage() {
  return (
    <>
    <Head>      
      <title>
       services
      </title>
    </Head>
    
    <BasicLayout>
      <section className="section__page">
        <Projects/>
      </section>
    </BasicLayout>
    </>
  )
}
