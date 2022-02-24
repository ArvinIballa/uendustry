import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import SupplierProfile from './components/SupplierPage/Profile/Profile';
import SupplierInventory from './components/SupplierPage/Inventory/Inventory'
import SupplierServices from './components/SupplierPage/Services/Services'
import SupplierDeliveries from './components/SupplierPage/Deliveries/Deliveries'
import SupplierTransaction from './components/SupplierPage/Transaction/Transaction'

import Home from './pages/Home'
import HowitWorks from './pages/HowitWorks'
import AboutUs from './pages/AboutUs'

import AllCategories from './pages/Categories/AllCategories';
import Digging from './pages/Categories/Digging';

import OurPartners from './pages/OurPartners'
import News from './pages/News'
import Blogs from './pages/Blogs'
import SignUp from './pages/SignUp'
import SeeAllDigging from './pages/Categories/SeeAllDigging';


function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/HowitWorks' exact element={<HowitWorks/>}/>
          <Route path='/AboutUs' exact element={<AboutUs/>}/>

          <Route path='/Categories/AllCategories' exact element={<AllCategories/>}/>
          <Route path='/Categories/Digging' exact element={<Digging/>}/>
          <Route path='/Categories/SeeAllDigging' exact element={<SeeAllDigging/>}/>



          <Route path='/OurPartners' exact element={<OurPartners/>}/>
          <Route path='/News' exact element={<News/>}/>
          <Route path='/Blogs' exact element={<Blogs/>}/>
          <Route path='/SignUp' exact element={<SignUp/>}/>



          <Route path="/Supplier/Profile" element={<SupplierProfile/>} exact />
          <Route path="/Supplier/Inventory" element={<SupplierInventory/>} exact />
          <Route path="/Supplier/Services" element={<SupplierServices/>} exact />
          <Route path="/Supplier/Deliveries" element={<SupplierDeliveries/>} exact />
          <Route path="/Supplier/Transactions" element={<SupplierTransaction/>} exact />
      </Routes>
    </Router>
    
  );
}

export default App;
