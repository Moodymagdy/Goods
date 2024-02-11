import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import './App.css';
import Login from './Components/Login/Login';


let routers = createBrowserRouter([
  {path:'/', element:<Layout/> ,children:[
    {index:true,element:<Home/>},
    {path:'products',element:<Products/>},
    {path:'*',element:<NotFound/>}
  ]},

  {path:'signin',element:<Login/>},

  {path:'register',element:<Register/>},
])



function App() {
  return <RouterProvider router={routers}/>

  
};

export default App;