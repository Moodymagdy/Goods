import React, { useState } from 'react';
import "./Register.css"
import { Form, Link } from 'react-router-dom'
import Joi from 'joi';
import axios from 'axios';

export default function Register() {
const[user,setUser]=useState({
  surname:"",
  Name:"",
  Family_Name:"",
  Mobile:"",
  email: "",
  password: "",
  day:"",
  month:"",
  year:""
})
const[error, setError] = useState("")
function getUserDate(e){
let myUser={...user};
myUser[e.target.name] = e.target.value;
setUser(myUser)
console.log(user);
}

async function sendDateToApi() {
  await axios
    .post("http://195.35.29.81:8004/api/", user)
    .then((response) => {
    })
    .catch((error) => {
      setError(error.message);
    });
}

const Joi = require('joi');

    
  return (
    <>
    
    <div className='container-fluid bg-r  d-flex justify-content-center align-items-center  p-4'>
<Form className='bg-f w-50 p-20 m-5  text-center d-flex flex-column ' onSubmit={sendDateToApi}>

        <div className='  d-flex flex-column aligin-content-around'>
          <div className='text-end'>

          <h2 className='goods w-90'>Goods</h2>
        </div>
        <div className='text-start ml-6 mb-3'>
          <h2 className='f-2'>Create a new account</h2>
        </div>
        <div className='ml-6 text-start'> 
          <label>surname</label>
        </div>
        <div className='d-flex flex-row-gap-0 justify-content-around'>
          <div>
           <input type='radio' id='Miss' name="surname" value="Miss"/> 
             <label for="html">Miss</label><br/> 
          </div>
          <div>
           <input type='radio' id='Mrs' name="surname" value="Mrs"/>
           <label for="Mrs">Mrs</label><br/> 
          </div>
          <div>   
          <input type='radio'id='Mister' name="surname" value="Mister"/>
             <label for="Mister">Mister</label><br/> 
          </div>
          </div>

        {/* ///////// */}
        <div className='inputBox'>
          <input className='transition' name='Name' type='text' required/>
          <label>Name</label>
          </div>
          {/* ///// */}

        {/* //// */}
        <div className='inputBox'>
          <input   type='text' name='Family_Name' required/>
          <label>Family Name</label>
        </div>
{/* //// */}
        <div className='d-flex justify-content-around'>
        <div className='inputBox w-75 p-2'>
          <input name='Mobile'  type='text' required/> 
          <label>Mobile number</label>
        </div>
        <div className='inputBox w-20 p-2'>
          <input  value={"+20"} placeholder='+20' type='text' disabled/> 
          {/* <label>+20</label> */}
        </div>
        </div>
{/* //// */}
<div className='inputBox'>
          <input name='email'  type='email' required/>
          <label>Email</label>
        </div>
    {/* //////// */}
    <div className='inputBox'>
          <input name='password'  type='password' required/>
          <label> <span>Password</span></label>
        </div>
        {/* ////// */}

          <h6 className='text-start ml-6'>Date of Birth (optional)</h6>
        <div className='d-flex justify-content-around p-2'> 

      <select id="day" className='p-3'name='day' value={user.day}>
        <option value="">Day</option>

        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>

      <select id="month" className='p-3'name='month' value={user.month}>
        <option value="">Month</option>

        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>


      <select id="year" className='p-3'name='year' value={user.year}>
        <option value="">Year</option>
        {Array.from({ length: 121 }, (_, i) => 2040 - i).map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
        </div>
      <div className='ml-5'>
        <p>By continuing, you confirm that you have read and agree to the Terms and Conditions and Privacy policy.
</p>
      </div>

      <div className="inputBox">
  <button className="btn w-100 p-3" type="submit">Create A New Account</button>
</div>

        </div>
      <div className='d-flex flex-row p-20 h-100 flex-grow-1 p-1 mb-2'>
      <hr/>
  <span style={{ margin: '0 10px' }}>Already have an account?</span>
  <hr/>
      </div>
      <div className='p-2'>
        <Link to="/login">
          <button className='btn btn-outline-primary w-100'>Log in
            </button>
        
      
            </Link>
      </div>
      <div>
        <h2 className='goods'>GoodS</h2>
      </div>
    </Form>

    </div>
    </>
  )
}
