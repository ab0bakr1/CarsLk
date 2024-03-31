import React from 'react'
import Company2 from "./Company/Company"
import Header from './header/Header'
import Footer from './footer/Footer'

const Company = () => {
  return (
    <>
      <Header />
      <div style={{paddingTop:"10vh"}}>
        <Company2 />
      </div>
      <Footer />
    </>
    
  )
}

export default Company