import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Pricing from './Pricing';
import Products from './Products';
import Inspiration from './Inspiration';
import Resources from './Resources';
import Login from './Login';
import Signup from './Signup';
function AllRoutes() {
    
    return <>
    
        <Routes>
            <Route path='/' element={ <Home/>}></Route>
            <Route path='/princing' element={<Pricing/> }></Route>
            <Route path='/products' element={<Products />}></Route>
        <Route path='/inspiration' element={<Inspiration/>}></Route>
            <Route path='/resources' element={<Resources/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>


        </Routes>
    </>
}
export default AllRoutes;