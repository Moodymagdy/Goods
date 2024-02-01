import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

let routers = createBrowserRouter([
  {path:'/', element:<Layout/> ,children:[
    {index:true,element:<Home/>},
    {path:'*',element:<NotFound/>}
  ]}
])



function App() {
  return <RouterProvider router={routers}/>
  

  
  

    

    
  
};

export default App;