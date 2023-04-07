import React from 'react'
import Head from 'next/head'
import BasicLayout from '../layouts/BasicLayout/BasicLayout'
import Skills from '../components/skills'

import 'animate.css'



export default function SkillsPage() {


  return (
    <>
    <Head>      
      <title>
       Habilidades page
      </title>
    </Head>
    
    <BasicLayout>
      <section className="section__skills-page">
        <Skills/>
      </section>
    </BasicLayout>
    </>
  )
}


