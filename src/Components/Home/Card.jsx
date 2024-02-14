import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Card.css";
export default function Card() {
  const [Product, setProduct] = useState([]);
  async function getData() {
    await axios
      .get("http://195.35.29.81:8004/api/Product/GetProducts", Product)
      .then((response) => {
        setProduct(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {});
  }
  const handleAddToCart = async (productId) => {
    try {
      // Retrieve token from localStorage
      const token = localStorage.getItem('token');
  
      // Check if token exists
      if (!token) {
        // Handle scenario where token is not available, e.g., redirect to login page
        console.error('Token not found!');
        return;
      }
  
      // Set token in request headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
  
      // Make POST request with token included in headers
      const response = await axios.post(
        "http://195.35.29.81:8004/api/CartItem/AddCartItem",
        {
          
            "productId": productId,
            "amount": 0
          
        },
        config
      );
  
      console.log("Added to cart:", response.data);
      // You can handle success scenario here, e.g., show a message to the user
    } catch (error) {
      console.error("Error adding to cart:", error);
      // You can handle error scenario here, e.g., show an error message to the user
    }
  };
  



  useEffect(() => {
    getData();
  },[]);

  return (
    <>
      <div className="container-fluid">
        <div className=" sale">
          <h2 className="">Sale</h2>

          <div className="row justify-content-evenly">
            <div
              className="card position-relative border-red cardS position-relative col-md-2  col-sm-6"
              style={{ width: "13rem" }}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                className="card-img-top img-fluid my-2 w-75 m-auto mb-2 img_border"
                alt="..."
              />
              <div className="mark ">
                <span>-20 %</span>
              </div>
              <div className="card-body ">
                <h5 className="card-title text-center mb-0">Card title</h5>
                <p className="card-text text-muted text-center my-2 fs-14px">
                  Some quick example
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <p className="text-decoration-line-through me-2 descount mb-0">
                    40EGP
                  </p>
                  <p className="ms-2 price mb-0">25EGP</p>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto ">
                  <button 
                    className="btn btn-danger btn-block add-Btn"
                    type="button" onClick={() => handleAddToCart()}
               
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* ///// */}
            <div
              className="card position-relative border-red cardS position-relative col-md-2 col-sm-6"
              style={{ width: "13rem" }}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                className="card-img-top img-fluid my-2 w-75 m-auto mb-2 img_border"
                alt="..."
              />
              <div className="mark ">
                <span>-20 %</span>
              </div>
              <div className="card-body ">
                <h5 className="card-title text-center mb-0">Card title</h5>
                <p className="card-text text-muted text-center my-2 fs-14px">
                  Some quick example
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <p className="text-decoration-line-through me-2 descount mb-0">
                    40EGP
                  </p>
                  <p className="ms-2 price mb-0">25EGP</p>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto ">
                  <button 
                    className="btn btn-danger btn-block add-Btn"
                    type="button" onClick={() => handleAddToCart()}
                    
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* //// */}
            <div
              className="card position-relative border-red cardS position-relative col-md-2 col-sm-6"
              style={{ width: "13rem" }}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                className="card-img-top img-fluid my-2 w-75 m-auto mb-2 img_border"
                alt="..."
              />
              <div className="mark ">
                <span>-20 %</span>
              </div>
              <div className="card-body ">
                <h5 className="card-title text-center mb-0">Card title</h5>
                <p className="card-text text-muted text-center my-2 fs-14px">
                  Some quick example
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <p className="text-decoration-line-through me-2 descount mb-0">
                    40EGP
                  </p>
                  <p className="ms-2 price mb-0">25EGP</p>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto ">
                  <button 
                    className="btn btn-danger btn-block add-Btn"
                    type="button" onClick={() => handleAddToCart()}
                    
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* //// */}

            <div
              className="card position-relative border-red cardS position-relative col-md-2 col-sm-6"
              style={{ width: "13rem" }}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                className="card-img-top img-fluid my-2 w-75 m-auto mb-2 img_border"
                alt="..."
              />
              <div className="mark ">
                <span>-20 %</span>
              </div>
              <div className="card-body ">
                <h5 className="card-title text-center mb-0">Card title</h5>
                <p className="card-text text-muted text-center my-2 fs-14px">
                  Some quick example
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <p className="text-decoration-line-through me-2 descount mb-0">
                    40EGP
                  </p>
                  <p className="ms-2 price mb-0">25EGP</p>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto ">
                  <button 
                    className="btn btn-danger btn-block add-Btn"
                    type="button" onClick={() => handleAddToCart()}
                    
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* ////// */}
            <div
              className="card position-relative border-red cardS position-relative col-md-2 col-sm-6"
              style={{ width: "13rem" }}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                className="card-img-top img-fluid my-2 w-75 m-auto mb-2 img_border"
                alt="..."
              />
              <div className="mark ">
                <span>-20 %</span>
              </div>
              <div className="card-body ">
                <h5 className="card-title text-center mb-0">Card title</h5>
                <p className="card-text text-muted text-center my-2 fs-14px">
                  Some quick example
                </p>
                <div className="d-flex justify-content-around align-items-center">
                  <p className="text-decoration-line-through me-2 descount mb-0">
                    40EGP
                  </p>
                  <p className="ms-2 price mb-0">25EGP</p>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto ">
                  <button 
                    className="btn btn-danger btn-block add-Btn"
                    type="button" onClick={() => handleAddToCart()}
                  
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {Product.length >= 5 && ( */}
      <Link to="/Shop">
        <div className="col-sm-6 text-left d-flex w-100  justify-content-end  ">
          <button className="btn btn-danger show "> Show more &gt; </button>
        </div>
      </Link>
      {/* )} */}
    </>
  );
}