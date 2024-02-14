import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function CategoryFilter() {
    const [products, setProducts] = useState([]);
    const [selectedFilterCategory, setSelectedFilterCategory] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const categoryFilters = ["fakha", "kodar"];
    const BaseUrl = "http://195.35.29.81:8004/api/Storage?Id=";

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const response = await axios.get("http://195.35.29.81:8004/api/Product/GetProducts");
            setProducts(response.data.products);
            setFilteredProducts(response.data.products); // Set filteredProducts initially
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

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
            let tempProduct = selectedFilterCategory.flatMap((selectedCategory) => {
                return products.filter((item) => item.categoryId === selectedCategory);
            });
            setFilteredProducts(tempProduct);
        } else {
            setFilteredProducts([...products]);
        }
    }

    return (
        <>
            <div>CategoryFilter</div>
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
            <div className="row justify-content-evenly">
                {filteredProducts.map((item, index) => (
                    <div key={index} className="card position-relative border-red cardS position-relative col-md-2  col-sm-6" style={{ width: "13rem" }}>
                        <img src={`${BaseUrl}${item.photo}`} className="card-img-top img-fluid my-2 w-75 m-auto mb-2 img_border" alt="..." />
                        <div className="mark ">
                            <span>-20 %</span>
                        </div>
                        <div className="card-body ">
                            <h5 className="card-title text-center mb-0">{item.name}</h5>
                            <p className="card-text text-muted text-center my-2 fs-14px">{item.description}</p>
                            <div className="d-flex justify-content-around align-items-center">
                                <p className="text-decoration-line-through me-2 descount mb-0">40EGP</p>
                                <p className="ms-2 price mb-0">{item.price}</p>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto ">
                                <button className="btn btn-danger btn-block add-Btn" type="button">Add</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
