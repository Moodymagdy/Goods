import React from 'react';
import { Link } from 'react-router-dom';
import './Shopping.css'; // Import the CSS file

export default function Shopping() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div className="col-md-6 text-center">
          <img src={require("../Shopping/img/cart.png")} alt="Shopping Img" className="mb-4 mt-4 shopping-img" />
          <h5>Looking for something?</h5>
          <p className='text-secondary'>Add your favorite items to your cart.</p>
       {/* Link to Products page */}
       <Link to="/products" className="btn btn-outline-primary mt-3 px-5">Keep Shopping</Link>
        </div>
      </div>
    </div>
  );
}
