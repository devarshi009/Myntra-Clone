import React from 'react'
import {Routes,Route} from "react-router-dom"
// import Bag from '../Bag/Bag'
import Beauty from '../BEAUTY/Beauty'
import HomeAndLiving from '../HOME&LIVING/HomeAndLiving'
import Home from '../Home/Home'
import Kids from '../Kids/Kids'
// import Men from '../Men/Men'
import Products from '../Product/Products'
import Profile from '../Profile/Profile'
import Studio from '../STUDIO/Studio'
 import Wishlist from '../Wishlist/Wishlist'
import Women from '../Women/Women'
import ProductDetail from "../Component/ProductDetail" 
import Cart from '../Cart/Cart'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/men" element={<Men/>}></Route> */}
        <Route path="/women" element={<Women/>}></Route>
        <Route path="/kids" element={<Kids/>}></Route>
        <Route path="/homeandliving" element={<HomeAndLiving/>}></Route>
        <Route path="/beauty" element={<Beauty/>}></Route>
        <Route path="/studio" element={<Studio/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
     
        <Route path="*" element={<h3>Page Not Found</h3>}/>
    
      
      </Routes>
    </div>
  )
}

export default AllRoutes