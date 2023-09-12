import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>
    </Routes>
    
    
  )
}

export default Routers