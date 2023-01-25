import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import  Home  from './components/Home'
import  Details  from './components/Details'
import  Wishlist  from './components/Wishlist'

function App () {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='details/:category/:id' element={<Details/>} />
            <Route path='wishlist' element={<Wishlist/>} />
            <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
    )
}

export default App