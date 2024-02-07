import React from 'react';
import '../Products/Products.css';




export default function Products() {

  const products = [
    { id: 1, imageSrc: require("./img/bo.jpg"), alt: "Product 1" },
    { id: 2, imageSrc: require("./img/cry.jpg"), alt: "Product 2" },
    { id: 3, imageSrc: require("./img/whi.jpg"), alt: "Product 3" },
    { id: 4, imageSrc: require("./img/whi.jpg"), alt: "Product 4" },
    
   
    // Add more products as needed
  ];
  
  return (
    <>
      <div className="container">
        <div className="row">
          {/* Left Half */}
          <div className="col-md-6">
           
          {/* First Layer: Items related to your cart */}
          <div className="cart-items-layer py-4">
      <h4>Items related to your cart</h4>
      <div className="product-list d-flex py-4 mx-3 ">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <div className="card px-5 rounded-4">
              <img src={product.imageSrc} alt={product.alt} className="product-image mt-2" />
              <div className="button-container">
                <button className="btn btn-product">Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
              
            
            {/* End of Items related to your cart */}

         
         {/* Second Layer: Allow grocery substitutions? */}
<div className="allow-substitutions-layer">
  <div className="allow-substitutions-content">
    <div className="switch-info-container">
      <h4>Allow grocery substitutions?</h4>
       <div className="info-icon-container">
      <i className="fas fa-info-circle"></i> {/* Use the appropriate icon class */}
    </div>
    </div>
    <label className='switch'>
        <input type="checkbox" />
        <span className='slider round'></span>
      </label>
  </div>
</div>

         

           {/* Third Layer: Your shipment */}
           <div className="your-shipment-layer">
           <h3>Your shipment</h3>
           <p className="light-font ">Sold by</p>
          
              {/* New Line: Entire section inside the same border */}
              <div className="shipment-container">
                <div className="shipment-details">
                  <i className="fa-solid fa-truck car-icon"></i>
                  <div>
                    <span className='fw-bold mx-2'>Standard Delivery: Wednesday 3 PM - 9 PM</span>
                    <p className="light-font mx-2">Change this delivery slot at checkout</p>
                  </div>
                </div>

                {/* New Line: Image and Text inside the same border */}
                <div className=" shipment-image ">
                  <img src={require("./img/cry.jpg")} alt="Crystal Sunflower Oil" className="icon-image" />
                  <div>
                    <p className="light-font">Crystal Sunflower Oil - 5L</p>
                    <p className="price-text fw-bold">EGP 623.60</p> 
                  
                    
                  </div>
                  <i class="fa-solid fa-trash mt-4 px-2 trash-icon" ></i>
                  <i class="fa-solid fa-plus mt-4 px-2 add-icon"></i>
                  
                 
                </div>
              </div>
          
            </div>
          </div>

          
            
      
            
         
          
          {/* Right Half */}
          <div className="col-md-6">
            {/* First Layer: Available Promotions */}
            <div className="available-promotions-layer">
              <h4>Available Promotions</h4>
              {/* Add your content for Available Promotions here */}
            </div>
             {/* Black Background Paragraph Layer */}
             <div className="black-background-paragraph-layer rounded d-flex justify-content-between">
              <div className="text-white">
                <p>
                  <span className="fw-bold">Save up to 200 EGP on spends over 1000 EGP with Mastercard every month.</span>
                  <br />Use Code MA20 for World & World Elite & MAIS for Platinum Cards TC Apply
                </p>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa-brands fa-cc-mastercard master-icon"></i>
              </div>
            </div>

            {/* Second Layer: Order Summary */}
            <div className="order-summary-layer py-5 d-flex justify-content-between align-items-center">
  <div>
    <h4>Order Summary</h4>
    <p className='py-5 fw-bold'>EGP 623.20</p>
    {/* Add your content for Order Summary here */}
  </div>

  {/* Checkout Button */}
  <button className="btn btn-primary px-5 py-2 mt-4 col-5">Checkout All</button>
</div>
{/* Centered Paragraph */}
<h5 className="text-center fw-bold ">Available payment methods</h5>

{/* Centered Icons */}
<div className="d-flex justify-content-center mt-3">
  <img src={require("./img/vis.jpg")} alt="Logo 1" className="logo-image" />
  <img src={require("./img/mez.jpg")} alt="Logo 2" className="logo-image" />
  <img src={require("./img/mas.jpg")} alt="Logo 3" className="logo-image" />
  <img src={require("./img/eti.jpg")} alt="Logo 4" className="logo-image" />
</div>

           
          </div>
        </div>
      </div>
    </>
  );
}
