import React from 'react';
import '../Navbar/Navbar.css'

import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <>
     
      <nav className="navbar navbar-expand-lg bg-transparent fw-bold mx-5" >
        <div className="container-fluid" >
          <Link className="navbar-brand text-danger " href="#"> <h3>Goods</h3></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-5"  id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item px-2">
                <Link className="nav-link text-danger" aria-current="page" to="">Home</Link>
              </li>
              <li className="nav-item px-2 ">
                <Link className="nav-link" to="Sale">Sale</Link>
              </li>
              <li className="nav-item px-2 ">
                <Link className="nav-link" to="Products">Products</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="Blog">Blog</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="Contact">Contact</Link>
              </li>
            </ul>
            <form className="mx-5 mt-3 px-3 col-md-7" role="search" >
              <div className="input-group mb-3 mx-5">
              <input type="text" className="form-control rounded-pill text-danger" st aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder= "Search..." />
                <button className="btn btn-danger rounded-circle px-1 py-1 " style={{right:'30px',top:'7px',height:'25px',fontSize:'0.8rem'}}  type="button">
                  <i className="fas fa-search search-icon"></i>
                </button>
                <button className="btn btn-outline mx-4" type="button">
                  Sign In
                </button>
                {/* Register button */}
                <div className='d-flex align-items-center'>
                <button className="btn btn-dark text-danger rounded-pill px-4 "  type="button">
                  Register
                </button>
                <span style={{color:'black'}}>
                
                <i class="fa-solid fa-cart-shopping mt-2 px-2 mx-2"></i>
              
                </span>
<p className='text-black my-2 '>0,00$</p>  
                </div>
               
                
              
              </div>
              

            </form>
          </div>
          
        </div>
        
      </nav>
    </>
  );
}