import React from 'react'
import Hero from './hero/Hero'
import Store from './store/Store'
import Clients from './clients/Clients'
import Company from './Company/Company'
import Contact from './footer/contact/Contact'
import Header from './header/Header'
import Footer from './footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Store />
      <Clients />
      <Company />
      <Contact />
      <Footer />
    </>
    )
}

export default Home