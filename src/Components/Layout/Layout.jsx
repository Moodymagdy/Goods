import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return <>
 <div className="layout-container">
      <Navbar />
      <div className='p-4'>
      <Outlet/>
      </div>
    </div>
  </>
}