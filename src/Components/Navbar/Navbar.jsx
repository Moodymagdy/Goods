import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-transparent fw-bold mx-5">
      <div className="container-fluid">
        <NavLink className="navbar-brand" style={{ color: '#b80000' }} to="/"><h3>Goods</h3></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item px-2">
              <NavLink className='nav-link' onClick={() => handleLinkClick('Home')} activeClassName="active" style={{ color: activeLink === 'Home' ? 'red' : 'black' }} exact to="/">Home</NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className= 'nav-link' onClick={() => handleLinkClick('Sale')} activeClassName="active" style={{ color: activeLink === 'Sale' ? 'red' : 'black' }} to="/sale">Sale</NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className='nav-link' onClick={() => handleLinkClick('Products')} activeClassName="active" style={{ color: activeLink === 'Products' ? 'red' : 'black' }} to="/products">Products</NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className='nav-link' onClick={() => handleLinkClick('Blog')} activeClassName="active" style={{ color: activeLink === 'Blog' ? 'red' : 'black' }} to="/blog">Blog</NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className='nav-link' onClick={() => handleLinkClick('Contact')} activeClassName="active" style={{ color: activeLink === 'Contact' ? 'red' : 'black' }} to="/contact">Contact</NavLink>
            </li>
          </ul>
          <form className="mx-5 mt-3 px-3 col-md-7" role="search">
            <div className="input-group mb-3 mx-5">
              <input type="text" className="form-control rounded-pill text-danger" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Search..." />
              <button className="btn btn-danger rounded-circle px-1 py-1" style={{ right: '30px', top: '7px', height: '25px', fontSize: '0.8rem' }} type="button">
                <i className="fas fa-search search-icon"></i>
              </button>
              <NavLink to="/signin" className="btn btn-outline mx-4" style={{ color: '#b80000' }}>Sign In</NavLink>
              {/* Register button */}
              <div className='d-flex align-items-center'>
                <button className="btn btn-dark text-danger rounded-pill px-4 " type="button">Register</button>
                <span style={{ color: 'black' }}>
                  <i className="fa-solid fa-cart-shopping mt-2 px-2 mx-2"></i>
                </span>
                <p className='text-black my-2'>0,00$</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
