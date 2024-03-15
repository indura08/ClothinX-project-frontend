import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import { BrowserRouter as Router, Routes, Navigate,
          Route,
          Link
  } from "react-router-dom"  //me tika aniwartyenma import wenna one eka mathk thiygnna aaye balddi unath


function App() {
  const user = true;
  //meka switch walin ynna hitiye switch ekata adalawa react-router-dom eke awlk thibba hinda me widiyt routes haraha yanna baluwa
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {<Home/>}/> {/* methna exact kiyla daanne  nattnm me widiyt slash eken patn ganna anik link load wenne nha me home ekami ewatath load wenne */}
        <Route path = "/products/:category" element = {<ProductList/>}/>
        <Route path = "/product/:id" element = {<Product/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
        <Route path = "/login" element = {
          user ? (
            <>
              <Navigate to = "/" />
            </>
          ) : <Login/>
        }/>
        <Route path = "/register" element = {<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App
