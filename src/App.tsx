import React from 'react'
import Navbar from './components/ui/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/ui/Footer'
import Contact from './pages/ContactPage'
import Delivery from './pages/Delivery'
import Fleet from './pages/Fleet'

const App = () => {
  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Fleet/>
        <Delivery/> 
        <Contact/>
        <Footer/>       
    </>


  )
}

export default App