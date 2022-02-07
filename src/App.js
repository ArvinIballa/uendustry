import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import SupplierProfile from './components/SupplierPage/Profile/Profile';
import SupplierInventory from './components/SupplierPage/Inventory/Inventory'
import SupplierServices from './components/SupplierPage/Services/Services'
import SupplierDeliveries from './components/SupplierPage/Deliveries/Deliveries'

import Home from './pages/Home'
import HowitWorks from './pages/HowitWorks'
import AboutUs from './pages/AboutUs'
import ProductPage from './pages/ProductPage'

import OurPartners from './pages/OurPartners'
import News from './pages/News'
import Blogs from './pages/Blogs'
import SignUp from './pages/SignUp'



function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/HowitWorks' exact element={<HowitWorks/>}/>
          <Route path='/AboutUs' exact element={<AboutUs/>}/>
          <Route path='/ProductPage' exact element={<ProductPage/>}/>


          <Route path='/OurPartners' exact element={<OurPartners/>}/>
          <Route path='/News' exact element={<News/>}/>
          <Route path='/Blogs' exact element={<Blogs/>}/>
          <Route path='/SignUp' exact element={<SignUp/>}/>



          <Route path="/Supplier/Profile" element={<SupplierProfile/>} exact />
          <Route path="/Supplier/Inventory" element={<SupplierInventory/>} exact />
          <Route path="/Supplier/Services" element={<SupplierServices/>} exact />
          <Route path="/Supplier/Deliveries" element={<SupplierDeliveries/>} exact />
      </Routes>
    </Router>
    
  );
}

export default App;
