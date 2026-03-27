import React from 'react'
import AboutCompany from "./Company/AboutCompany"
import Header from './header/Header'
import Footer from './footer/Footer'

const Company = () => {
  return (
    <>
      <Header />
      <div style={{paddingTop:"10vh"}}>
        <AboutCompany />
        
      </div>
      <Footer />
    </>
    
  )
}

export default Company