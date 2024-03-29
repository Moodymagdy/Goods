import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

export default function Layout() {

  
  return <>
      <Navbar />

 
      <div className='min-vh-100'>
      <Outlet/>
   </div>
   
   <Footer/>

  </>
}