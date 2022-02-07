import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home';
import HowitWorks from './HowitWorks';
import AboutUs from './AboutUs';
import ProductPage from './ProductPage';
import OurPartners from './OurPartners';
import News from './News';
import Blogs from './Blogs';
import SignUp from './SignUp';

export default function RouterPage() {
  return (
      <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/HowitWorks' exact element={<HowitWorks/>}/>
                <Route path='/AboutUs' exact element={<AboutUs/>}/>
                <Route path='/ProductPage' exact element={<ProductPage/>}/>


                <Route path='/OurPartners' exact element={<OurPartners/>}/>
                <Route path='/News' exact element={<News/>}/>
                <Route path='/Blogs' exact element={<Blogs/>}/>
                <Route path='/SignUp' exact element={<SignUp/>}/>


            </Routes>
        </BrowserRouter>

      </div>
  )
}
