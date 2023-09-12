import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Routers from '../Routers/Routers'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Routers/>
        <Footer/>
        <Sidebar/>
        
    </div>
  )
}

export default Layout