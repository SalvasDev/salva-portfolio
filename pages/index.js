import { useEffect, useState } from 'react'
import BasicLayout from '../layouts/BasicLayout'
import Hero from '../components/hero'
import Socialbar from '../components/socialBar'
import IndexBar from '../components/indexBar'
import { IndexContextProvider } from '../context/IndexContext'
import Projects from '../components/projects'
import Contact from '../components/contact'
import About from '../components/about'
import 'animate.css'
import Head from 'next/head'
import Skills from '../components/skills'
import Image from 'next/image'
import arrow from '../assets/img/arrow.svg'
import { positionAnchor } from '../helpers/'


export default function Home() { 

const [showVerticalBtn, setShowVerticalBtn ] = useState(false)

 useEffect(() => {
      positionAnchor()   
      const handleScroll = () => {
      const distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const distanceInPercentage = (distanceFromTop / totalHeight) * 100;

      if (distanceInPercentage >= 5 ) { // Cambia este valor para el porcentaje que desees

        setShowVerticalBtn(true)  
      } else {
        setShowVerticalBtn(false)
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <>
      <Head>
         <title>Salvador Dev Frontend</title>
         <meta name='description' content='Hola!, mi nombre es Salvador Sánchez, soy desarrollador frontend dedicado a la creación de sitios y aplicaciones web.'/>         
      </Head>
        <IndexContextProvider>
          <BasicLayout>
              <Hero />
              <Socialbar />
              <IndexBar />
              <Skills />
              <Projects />
              <About />
              <Contact />
              {
               showVerticalBtn && 
                <a href='#start' className="vertical__arrow-btn">
                    <Image className="arrow__btn" width='45' src={arrow} alt='arrow'/>
                </a>
              }
          </BasicLayout>
        </IndexContextProvider>
      </>
  )
}

















