import { useState } from 'react'
import NavbarDark from '../components/NavbarDark'
import './App.css'
import Homepage from '../components/Homepage'
import { Router, Routes , Route } from 'react-router-dom'
import ProductList from '../components/ProductList'
import ProductDetail from '../components/ProductDetail'
function App() {

  return (
    <>
 {/* //Navbar visile on top of every page  */}
    <NavbarDark/>
{/*  
 different routes -  Homepage for home section  ,ProductList to show list of available products
  ,ProductDetail to show details of produt in detailed manner */}
   
    <Routes>
   {/* dynamic route to show product on base of product-id */}
      <Route path='/product/:productId' element={<ProductDetail/>}></Route>
   
    <Route path='/' element={<Homepage/>} ></Route>
    <Route path='/product-list' element={<ProductList/>} ></Route>
    
    </Routes>  
  
    </>
  )
}

export default App
