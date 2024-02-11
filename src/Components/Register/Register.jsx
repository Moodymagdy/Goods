import React, { useEffect, useState } from 'react';
import "./Register.css"
import { Form, Link, useNavigate } from 'react-router-dom'
import Joi from 'joi';
import axios from 'axios';

export default function Register() {
const[user,setUser]=useState({
   Title:'',
  Name:"",
  Family_Name:"",
  Mobile:0,
  email: "",
  password: "",
  day:"",
  month:"",
  year:""
})
const[error, setError] = useState("");
const [errorList,setErrorList]=useState([]);
let navigate=useNavigate();

useEffect(()=>{
  // validateRegisterForm();
  console.log(user);
},[user])

function getUserData(eventInfo) {
  let myUser = { ...user };
  myUser[eventInfo.target.name] = eventInfo.target.value;
  setUser(myUser);
  // console.log(myUser)
  // console.log("hello")
  
  

  
}

async function sendDateToApi() {
  await axios
    .post("http://195.35.29.81:8004/api/User/RegisterAsUser/", user)
    .then((response) => {
      navigate('/login')
    })
    .catch((error) => {
      setError(error.message);
    });
}
function submitedRegisterForm(e){
  e.preventDefault(); 
let validation= validateRegisterForm();
if (validation.error){
  setErrorList(validation.error.details)
  console.log(errorList)
}
else{
  sendDateToApi();
}
}
function validateRegisterForm(){
  let scheme= Joi.object({
    Title:Joi.string().required(),
    Name:Joi.string().min(2).max(12).required(),
    Family_Name:Joi.string().min(2).max(12).required(),
    Mobile:Joi.number().integer().greater(999999999).less(10000000000).required(),
    email:Joi.string().email({ tlds: { allow: ['net', 'com'] } }).required(),
    password:Joi.string().min(8)
    .pattern(/^(?=.*[a-zA-Z0-9])(?=.*[^a-zA-Z0-9])(?=.*[0-9])(?=.*[A-Z]).*$/),
              // ^ at least one upper case letter, one lowercase letter, one number and one special character
     year:Joi.optional(),
     day:Joi.optional(),
     month:Joi.optional(),
  });
return scheme.validate(user , {abortEarly:false});

}

// useEffect(()=>{
//   console.log(user);

// },[])
    
  return (
    <>
     <div className='container-fluid bg-r  d-flex justify-content-center align-items-center  p-4'>
        <Form className='bg-f w-50 p-20 m-5  text-center d-flex flex-column ' onSubmit={submitedRegisterForm}>

          <div className='  d-flex flex-column aligin-content-around'>
            <div className='text-start ml-6 mt-2 mb-2'>
              <h2 className='goods w-90'>Goods</h2>
            </div>
            <div className='text-start ml-6 mb-3'>
              <h2 className='f-2'>Create a new account</h2>
            </div>
            <div className='ml-6 text-start'>
              <label htmlFor="Title">Title</label>
            </div>
            <div className='d-flex flex-row-gap-0 justify-content-around'>
              <div>
                <input onChange={getUserData} type='radio'  name="Title"  value="Miss"  />
                <label htmlFor="Miss">Miss</label><br />
              </div>
              <div>
                <input onChange={getUserData} type='radio'  name="Title"  value="Mrs" />
                <label htmlFor="Mrs">Mrs</label><br />
              </div>
              <div>
                <input onChange={getUserData} type='radio' name="Title"  value="Mister" />
                <label htmlFor="Mister">Mister</label><br />
              </div>
              

            </div>
            {errorList?.map((err,index)=>{if(err.context.label==="Title") {
              return <div key={index} className='alert error text-start'>{err.message}</div>
             }
            }
              )}
            <div className={`inputBox ${errorList.length !== 0 ?'has-error' : ''}`}>
              <input className='transition' name='Name' type='text'  onChange={getUserData} />
              <label>Name</label>
              {errorList?.map((err,index)=>{if(err.context.label==="Name") {
              return <div key={index} className='alert error text-start'>{err.message}</div>
             }
            }
              )}

            </div>

            <div className={`inputBox ${errorList.length !== 0 ?'has-error' : ''}`}>
              <input type='text' name='Family_Name'  onChange={getUserData} />
              <label>Family Name</label>
              {errorList?.map((err,index)=>{if(err.context.label==="Family_Name") {
              return <div key={index} className='alert  error text-start '>{err.message}</div>
             }
            }
              )}
            </div>

            <div className='d-flex justify-content-around'>
            <div className={`inputBox w-20 p-2 ${errorList.length !== 0 ?'has-error' : ''}`}>
                <input value={"+20"} placeholder='+20' type='text' disabled />
              </div>
              <div className='inputBox w-75 p-2'>
                <input name='Mobile' type='text'  onChange={getUserData} />
                <label>Mobile number</label>
                {errorList?.map((err,index)=>{if(err.context.label==="Mobile") {
              return <div key={index} className='alert error text-start'>
                <span>your mobile number must be 11 numbers </span>
              </div>
             }
            }
              )}
              </div>

            </div>

            <div className={`inputBox ${errorList.length !== 0 ?'has-error' : ''}`}>
              <input name='email' type='email'  onChange={getUserData} />
              <label>Email</label>
              {errorList?.map((err,index)=>{if(err.context.label==="email") {
              return <div key={index} className='alert error text-start'>{err.message}</div>
             }
            }
              )}
            </div>

            <div className={`inputBox ${errorList.length !== 0 ?'has-error' : ''}`}>
              <input name='password' type='password'  onChange={getUserData} />
              <label>Password</label>
              {errorList?.map((err,index)=>{if(err.context.label==="password") {
              return <div key={index} className='alert error text-start'>
                <span>
                  password invalid <br/>
                  password must  be at least 8 characters long and contain one number and one uppercase letter.
                </span>
              </div>
             }
             else{
              <div key={index} className='alert error text-start'>{err.message}</div>
             }
            }
              )}
            </div>

            <h6 className='text-start ml-6'>Date of Birth (optional)</h6>
            <div className='d-flex justify-content-around p-2'>

              <select id="day" className='p-3' name='day' value={user.day} >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>

              <select id="month" className='p-3' name='month' value={user.month} >
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

              <select id="year" className='p-3' name='year' value={user.year} >
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
            <hr />
            <span style={{ margin: '0 10px' }}>Already have an account?</span>
            <hr />
          </div>
          <div className='p-2'>
            <Link to="/login">
              <button className='btn btn-outline-primary w-100'>Log in</button>
            </Link>
          </div>
          <div>
            <h2 className='goods'>Goods</h2>
          </div>
        </Form>
      </div>
    </>
  )
}
