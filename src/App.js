import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
<<<<<<< HEAD
import Shopping from './Components/Shopping/Shopping';
=======
import Shop from './Components/Shop/Shop';
import './App.css';
>>>>>>> f370ddc1373b81764a2e8c0d5a1cd28186fe6194


let routers = createBrowserRouter([
  {path:'/', element:<Layout/> ,children:[
    {index:true,element:<Home/>},
    {path:'shopping',element:<Shopping/>},
    {path:'products',element:<Products/>},
    {path:'Shop',element:<Shop/>},
    {path:'*',element:<NotFound/>}
  ]},

  {path:'signin',element:<Login/>},

  {path:'register',element:<Register/>},
])



function App() {
  
  return <RouterProvider router={routers}/>

  
};

export default App;