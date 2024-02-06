import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Products from './Components/Products/Products';

let routers = createBrowserRouter([
  {path:'/', element:<Layout/> ,children:[
    {index:true,element:<Home/>},
    {path:'products',element:<Products/>},
    {path:'*',element:<NotFound/>}
  ]}
])



function App() {
  return <RouterProvider router={routers}/>
  

  
  

    

    
  
};

export default App;