import React from 'react'
import Hero from './hero/Hero'
import Store from './store/Store'
import Clients from './clients/Clients'
import AboutCompany from './Company/AboutCompany'
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
      <AboutCompany />
      <Contact />
      <Footer />
    </>
    )
}

export default Home