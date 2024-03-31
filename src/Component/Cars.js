import React from 'react'
import Store from "./store/Store"
import Header from './header/Header'
import Footer from './footer/Footer'

const Cars = () => {
  return (
    <>
      <Header />
      <div style={{paddingTop:"10vh"}}>
        <Store />
      </div>
      <Footer />
    </>
    
  )
}

export default Cars