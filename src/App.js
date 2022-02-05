import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import SupplierProfile from './components/SupplierPage/Profile/Profile';
import SupplierInventory from './components/SupplierPage/Inventory/Inventory'
import SupplierServices from './components/SupplierPage/Services/Services'
import SupplierDeliveries from './components/SupplierPage/Deliveries/Deliveries'
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/Supplier/Profile" element={<SupplierProfile/>} exact />
          <Route path="/Supplier/Inventory" element={<SupplierInventory/>} exact />
          <Route path="/Supplier/Services" element={<SupplierServices/>} exact />
          <Route path="/Supplier/Deliveries" element={<SupplierDeliveries/>} exact />
      </Routes>
    </Router>
    
  );
}

export default App;
