
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import { Name } from './Name';
import { Mobile } from '../Mobile';
import { Mobileadd } from '../Mobileadd';

const Landing = () => {
    return (
       <BrowserRouter>
       <Nav/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addname' element={<Name/>}/>
        <Route path='/shpr' element={<Mobileadd/>}/>
        <Route path='addpr' element={<Mobile/>}/>
        
       </Routes>
       </BrowserRouter>
    );
};

export default Landing;