import { useState } from 'react'
import Navbar from './components/Navbar'
import Section1 from './components/sections/Section1'
import Header from './components/header/Header'
import Service from './components/service/Service'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import React from 'react';
import './i18n'; // i18n sozlamalarini import qilish
import Portfolio from './components/portfolio/Portfolio'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Header/>
    <Section1/>
    <Service/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
