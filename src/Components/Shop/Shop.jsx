import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Sidebar.css";
import "./Show.css";
import CategoryFilter from "./CategoryFilter";


export default function Shop() {
  const BaseUrl = "http://195.35.29.81:8004/api/Storage?Id=";
  const [products, setProducts] = useState([]);
  //priceFilter set
  const [selectedFilterPrice, setSelectedFilterPrice] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const filters = ["10", "15", "30"];

  //CategoryFilterSet
  const [selectedFilterCategory,setSelectedFilterCategory]=useState([]);
  let categoryFilters=["fakha","kodar"];
  
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios
      .get(`http://195.35.29.81:8004/api/Product/GetProducts`, products)
      .then((response) => {
        setProducts(response.data.products);
        //   console.log(response.data.products);
      })
      .catch((error) => {});
  }
  // Price Filter
  const handlePriceFilterChange = (selectedPrice) => {
    if (selectedFilterPrice.includes(selectedPrice)) {
      setSelectedFilterPrice((prevFilter) =>
        prevFilter.filter((el) => el !== selectedPrice)
      );
    } else {
      setSelectedFilterPrice((prevFilter) => [...prevFilter, selectedPrice]);
    }
  };

  useEffect(() => {
    filterItemsPrice();
  }, [selectedFilterPrice, products]);

  const filterItemsPrice = () => {
    if (selectedFilterPrice.length > 0) {
      let tempItems = selectedFilterPrice.flatMap((selectedPrice) => {
        return products.filter(
          (item) => item.price === parseInt(selectedPrice)
        );
      });
      setFilteredProducts(tempItems);
    } else {
      setFilteredProducts([...products]);
    }
  };
// Category Filter

const handelCategoryFilterChange = (selectedCategory) => {
    if (selectedFilterCategory.includes(selectedCategory)) {
        let categoryFilters = selectedFilterCategory.filter((el) => el !== selectedCategory);
        setSelectedFilterCategory(categoryFilters);
    } else {
        setSelectedFilterCategory([...selectedFilterCategory, selectedCategory]);
    }
}
useEffect(() => {
    filterCategory();
}, [selectedFilterCategory]);

const filterCategory = () => {
    if (selectedFilterCategory.length > 0) {
        let tempProduct = products.filter((item) => selectedFilterCategory.includes(item.category));
        setFilteredProducts(tempProduct);
    } else {
        setFilteredProducts([...products]);
    }
}



  
  return (
    <>
      <div className="sidebar">
        <h3>PriceFilter</h3>
        {filters.map((price, index) => (
          <label key={`filter-${index}`}>
            <input
              type="checkbox"
              onChange={() => handlePriceFilterChange(price)}
              className={selectedFilterPrice.includes(price) ? "checked" : ""}
            />
            {`Price ${price} EGP `}
          </label>
        ))}
        <h3>CategoryFilter</h3>
        {categoryFilters.map((category, index) => (
                <label key={`categoryFilter-${index}`}>
                    <input
                        type="checkbox"
                        onChange={() => handelCategoryFilterChange(category)}
                        className={selectedFilterCategory.includes(category) ? "checked" : ""}
                    />
                    {`${category}`}
                </label>
            ))}
      </div>

      <div className="container card-container">
        <div className=" sale">
            <h2>Sale</h2>
            <div className="row justify-content-evenly">
          {filteredProducts.map((item, index) => (
              <div  key={index} 
                className="card position-relative border-red cardS position-relative col-md-2  col-sm-6"
                style={{ width: "13rem" }}
              >
                <img
                  src={`${BaseUrl}${item.photo}`}
                  className="card-img-top img-fluid my-2 w-75 m-auto mb-2 img_border"
                  alt="..."
                />
                <div className="mark ">
                  <span>-20 %</span>
                </div>
                <div className="card-body ">
                  <h5 className="card-title text-center mb-0">{item.name}</h5>
                  <p className="card-text text-muted text-center my-2 fs-14px">
                    {item.description}
                  </p>
                  <div className="d-flex justify-content-around align-items-center">
                    <p className="text-decoration-line-through me-2 descount mb-0">
                      40EGP
                    </p>
                    <p className="ms-2 price mb-0">{item.price}</p>
                  </div>
                  <div className="d-grid gap-2 col-6 mx-auto ">
                    <button
                      className="btn btn-danger btn-block add-Btn"
                      type="button"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}
