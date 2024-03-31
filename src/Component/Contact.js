import React from 'react'
import Contact from "./footer/contact/Contact"
import Footer from './footer/Footer'
import Header from './header/Header'

const contact = () => {
  return (
    <>
      <Header />
      <div style={{paddingTop:"20vh"}}>
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default contact