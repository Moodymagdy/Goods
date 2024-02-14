import React, { useState } from 'react'
import './Sidebar.css';
import PriceFilter from './PriceFilter';
import CategoryFilter from './CategoryFilter';


export default function Sidebar() {
    const [selectedPrices, setSelectedPrices] = useState([]);

    const handlePriceFilterChange= (selectedPrices)=>{
        setSelectedPrices(selectedPrices);
    }
    const [selectedCategory, setSelectedCategory] = useState([]);

    const handleCategoryFilterChange= (selectedCategory)=>{
        setSelectedCategory(selectedCategory);
    }
  return (
    <>
    <div className='sidebar'>
        <CategoryFilter  handleFilterChange={handleCategoryFilterChange} />
        <PriceFilter handleFilterChange={handlePriceFilterChange}/>
    </div>
    </>
  )
}
