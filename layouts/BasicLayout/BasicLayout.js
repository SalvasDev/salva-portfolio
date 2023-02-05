import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'


export default function BasicLayout(props) {
  const {  children } = props
  return (
    <>
      <div>
        <Header />
      </div>
      { children }
      <Footer />
    </>
  )
}
