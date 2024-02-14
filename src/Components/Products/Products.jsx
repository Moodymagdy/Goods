import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Products/Products.css';

export default function Products() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [duplicateProductMessage, setDuplicateProductMessage] = useState("");

  const products = [
    { id: 1, imageSrc: require("./img/bo.jpg"), alt: "Product 1", counter: 1, price: 100 },
    { id: 2, imageSrc: require("./img/cry.jpg"), alt: "Product 2", counter: 1, price: 150 },
    { id: 3, imageSrc: require("./img/whi.jpg"), alt: "Product 3", counter: 1, price: 200 },
    { id: 4, imageSrc: require("./img/whi.jpg"), alt: "Product 4", counter: 1, price: 250 },
    // Add more products as needed
  ];

  const increaseCounter = (productId) => {
    setSelectedProducts(prevSelectedProducts =>
      prevSelectedProducts.map(product =>
        product.id === productId ? { ...product, counter: product.counter + 1 } : product
      )
    );
  };

  const decreaseCounter = (productId) => {
    setSelectedProducts(prevSelectedProducts =>
      prevSelectedProducts.map(product =>
        product.id === productId && product.counter > 1 ? { ...product, counter: product.counter - 1 } : product
      )
    );
  };

  const handleAddButtonClick = (product) => {
    if (selectedProducts.some(item => item.id === product.id)) {
      setDuplicateProductMessage("You've already added this product!");
    } else {
      setSelectedProducts(prevSelectedProducts => [...prevSelectedProducts, { ...product }]);
      setDuplicateProductMessage("");
    }
  };

  const handleRemoveButtonClick = (productId) => {
    setSelectedProducts(prevSelectedProducts =>
      prevSelectedProducts.filter(product => product.id !== productId)
    );
  };

  // Calculate total price
  const totalPrice = selectedProducts.reduce((total, product) => total + (product.price * product.counter), 0);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="cart-items-layer py-4">
              <h4>Items related to your cart</h4>
              <div className="product-list d-flex py-4 mx-3 ">
                {products.map(product => (
                  <div key={product.id} className="product-item">
                    <div className="card px-5 rounded-4">
                      <img src={product.imageSrc} alt={product.alt} className="product-image mt-2" />
                      <div className="button-container">
                        <button className="btn btn-product" onClick={() => handleAddButtonClick(product)}>Add</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {duplicateProductMessage && <p style={{ color: 'red' }}>{duplicateProductMessage}</p>}
            </div>
            <div className="shipment-container">
              <div className="shipment-details">
                <i className="fa-solid fa-truck car-icon"></i>
                <div>
                  <span className='fw-bold mx-2'>Standard Delivery: Wednesday 3 PM - 9 PM</span>
                  <p className="light-font mx-2">Change this delivery slot at checkout</p>
                </div>
              </div>
              {selectedProducts.map(product => (
                <div key={product.id} className="shipment-image">
                  <img src={product.imageSrc} alt={product.alt} className="icon-image" />
                  <div>
                    <p className="light-font">{product.alt}</p>
                    <p className="price-text fw-bold">EGP {product.price}</p>
                  </div>
                  {product.counter > 1 ? (
                    <i className="fa-solid fa-minus mt-4 px-2 trash-icon" onClick={() => decreaseCounter(product.id)}></i>
                  ) : (
                    selectedProducts.length === 1 ? (
                      <Link to='/shopping' className="fa-solid fa-trash mt-4 px-2 trash-icon"></Link>
                    ) : (
                      <i className="fa-solid fa-trash mt-4 px-2 trash-icon" onClick={() => handleRemoveButtonClick(product.id)}></i>
                    )
                  )}
                  <div className="counter-container pt-4">
                    <span className="counter mx-2">{product.counter}</span>
                  </div>
                  <i className="fa-solid fa-plus mt-4 px-2 add-icon" onClick={() => increaseCounter(product.id)}></i>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="available-promotions-layer">
              <h4>Available Promotions</h4>
            </div>
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
            <div className="order-summary-layer py-5 d-flex justify-content-between align-items-center">
              <div>
                <h4>Order Summary</h4>
                <p className='py-5 fw-bold'>EGP {totalPrice.toFixed(2)}</p>
              </div>
               {/* Checkout Button */}
  <button className="btn btn-primary px-5 py-2 mt-4 col-5">Checkout All</button>

            </div>
            <h5 className="text-center fw-bold ">Available payment methods</h5>
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