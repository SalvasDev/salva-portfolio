import Image from 'next/image'
import Link from 'next/link'
import BasicLayout from '../layouts/BasicLayout'
import Hero from '../components/hero'
import Socialbar from '../components/socialBar'
import IndexBar from '../components/indexBar'
import { IndexContextProvider } from '../context/IndexContext'
import Services from '../components/services'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'
import About from '../components/about'
import 'animate.css'


export default function Home() { 

  return (
      <>
        <IndexContextProvider>
          <BasicLayout>
              <Hero />
              <Socialbar />
              <IndexBar />
              <Services />
              <Projects />
              <About />
              <Contact />
          </BasicLayout>
        </IndexContextProvider>
      </>
  )
}



















// import Head from 'next/head'
// import Image from 'next/image'
// import { Poppins } from '@next/font/google'
// import Link from 'next/link'
// import BasicLayout from '../layouts/BasicLayout'
// import Hero from '../components/hero'
// import { createContext, useState } from 'react'

// const poppins = Poppins({
//   weight: ['400', '500', '700'],
//   style: ['normal']
// })

// export const ThemeContext = createContext(null)
 
// export default function Home() {
//   const [theme, setTheme] = useState('light')
  
//   const toggleTheme = () => {
//     setTheme((curr) => (curr === 'light' ? 'dark': 'light'))
//   }

//   return (
//     <ThemeContext.Provider value={{theme, setTheme}}>
//       <div id={theme}>
//         <BasicLayout>
//             <Hero />
//         </BasicLayout>
//       </div>
//     </ThemeContext.Provider>
//   )
// }
