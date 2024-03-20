//TO CHECK SIGN-IN FUNCTION JUST USE "indura08" AS USERNAME AND "indura123" AS PASSWORD.

//register page can be checked too, it has been connected to the database.

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
          Link,
  } from "react-router-dom"  //me tika aniwartyenma import wenna one eka mathk thiygnna aaye balddi unath
import Sucess from './pages/Sucess'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector((state) => state.user.currentUser);
  //meka switch walin ynna hitiye switch ekata adalawa react-router-dom eke awlk thibba hinda me widiyt routes haraha yanna baluwa
  return (

    <Router>
      <Routes>
        <Route exact path = "/" element = {<Home/>}/> {/* methna exact kiyla daanne  nattnm me widiyt slash eken patn ganna anik link load wenne nha me home ekami ewatath load wenne */}
        <Route path = "/products/:categories" element = {<ProductList/>}/>
        <Route path = "/products" element = {<ProductList/>}/>
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
        <Route path = "/sucess" element = {<Sucess/>}/>
        
      </Routes>
    </Router>
  )
}

export default App
