// import axios from 'axios';
// import React, { useState, useEffect } from 'react'
// export default function PriceFilter({ handleFilterChange }) {
//     const [products, setProducts] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]);

//     const [priceFilters, setPriceFilters] = useState({
//       price1: false,
//       price2: false,
//       price3: false,
//       // Add more price options as needed
//     });
//     useEffect(() => {
//         getData();
//       },[]);


//       useEffect(() => {
//     }, [priceFilters, products]);


//       async function getData() {
//         await axios
//           .get("http://195.35.29.81:8004/api/Product/GetProducts", products)
//           .then((response) => {
//             setProducts(response.data.products);
//             // console.log(response.data.products);
//           })
//           .catch((error) => {});
//       }
  
//     const handlePriceFilterChange = (event) => {
//         const { name, checked } = event.target;
//         setPriceFilters((prevPriceFilters) => ({
//           ...prevPriceFilters,
//           [name]: checked,
//         }));
//         handleFilterChange(priceFilters);
//         if (checked){
//             applyFilter();
            
//           }

//       };
  
//       const applyFilter = () => {
//         let filterd= [...products];
//         if (priceFilters.price1=true){
//             console.log("10");
//             filterd=filterd.filter(product=>product.price>=15 & product.price<=30)
//         }
//         if(priceFilters.price2.checked ==true){
//             console.log("20");
//             filterd=filterd.filter(product=>product.price>= 5 &&  product.price <=12)
//       };
//     }


//   return (
//     <>
//         <h3>Price Filter</h3>
//       <label>
//         <input
//         className='my-2'
//           type="checkbox"
//           name="price1"
//           checked={priceFilters.price1}
//           onChange={handlePriceFilterChange}
//         />
//         Price Range 1
//       </label>
//       <label>
//         <input
//         className='my-2'
//           type="checkbox"
//           name="price2"
//           checked={priceFilters.price2}
//           onChange={handlePriceFilterChange}
//         />
//         Price Range 2
//       </label>
      
//       <label>
//         <input
//         className='my-2'
//           type="checkbox"
//           name="price3"
//           checked={priceFilters.price3}
//           onChange={handlePriceFilterChange}
//         />
//         Price Range 3
//       </label>
//     </>
//   )
// }
// import {React, useEffect, useState} from 'react'
// import axios from 'axios';
// import Show from './Show';
// export default function PriceFilter() {
//     const [products, setproducts] = useState([])
// const [selectedFilter, setSelectedFilter] = useState([]);
// const [filteredProducts, setFilteredProducts]=useState(products);
// let filters =["20","10","30"]
// useEffect(() => {
//     getData();
// }, []);

//           async function getData() {
//         await axios
//           .get("http://195.35.29.81:8004/api/Product/GetProducts", products)
//           .then((response) => {
//             setproducts(response.data.products);
//             // console.log(response.data.products);
//           })
//           .catch((error) => {
//             console.error("Error fetching data: ", error);
//           });
//       }

//       const handlePriceFilterChange = (selectedPrice) => {
//         if (selectedFilter.includes(selectedPrice)) {
//             setSelectedFilter(selectedFilter.filter((el) => el !== selectedPrice));
//         } else {
//             setSelectedFilter([...selectedFilter, selectedPrice]);
//         }
//     };
//     useEffect(() => {
//         filterItems();
//     }, [selectedFilter, products]);

//   const filterItems=()=>{
//     if(selectedFilter.length>0){
// let tempItems=selectedFilter.map((selectedPrice)=>{
//     let temp=products.filter((item)=>item.price=== selectedPrice);
// })
// setFilteredProducts(tempItems.flat())
//     }else{
//         setFilteredProducts([...products])
//     }
//   }

//   return (
//     <>
//        {filters.map((price,index)=>(
//         <lable>
//             <input
//              type="checkbox"  
//              onChange={()=>handlePriceFilterChange(price)}
//              className={`${setSelectedFilter?.includes(price)?"checked":""}`} 
//               key={`filters-${index}`} />
//             {`Price ${price}+ `}
//         </lable>
//        ))} 
//        <Show filteredProducts={filteredProducts}/>
//     </>
//   )
// }
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Show from './Show';

export default function PriceFilter() {
    const [products, setProducts] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);
  
    const filters = ["10", "20", "30"];

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const response = await axios.get("http://195.35.29.81:8004/api/Product/GetProducts");
            setProducts(response.data.products);
            setFilteredProducts(response.data.products);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }
    const handlePriceFilterChange = (selectedPrice) => {
        if (selectedFilter.includes(selectedPrice)) {
            setSelectedFilter(prevFilter => prevFilter.filter(el => el !== selectedPrice));
        } else {
            setSelectedFilter(prevFilter => [...prevFilter, selectedPrice]);
        }
    }

    useEffect(() => {
        filterItems();
    }, [selectedFilter, products]);

    const filterItems = () => {
        if (selectedFilter.length > 0) {
            let tempItems = selectedFilter.flatMap(selectedPrice => {
                return products.filter((item) => item.price === parseInt(selectedPrice));
            });
            setFilteredProducts(tempItems);
        } else {
            setFilteredProducts([...products]);
        }
    }

    return (
<>
            {filters.map((price, index) => (
                <label key={`filter-${index}`}>
                    <input
                        type="checkbox"
                        onChange={() => handlePriceFilterChange(price)}
                        className={selectedFilter.includes(price) ? "checked" : ""}
                    />
                    {`Price ${price}+ `}
                </label>
            ))}
            <Show filteredProducts={filteredProducts} />
        </>
    );
}
