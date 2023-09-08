import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Routers from '../Routers/Routers'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Routers/>
        <Footer/>
        
    </div>
  )
}

export default Layout