import React from 'react'
import '../Footer/Footer.css'

export default function Footer() {
  return <>
  <footer className=" pt-4  text-white" style={{backgroundColor:'#b80000'}}>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h4 className="mb-3">Get Exclusive Access & 10% Off</h4>
        <p className="mb-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
         Temporibus mollitia sit quaerat suscipit architecto?</p>
         <div className="input-group mb-3 align-items-center justify-content-center">
          <input type="email" className="input-group-text rounded-pill mx-3 px-5  " placeholder="Enter your email" />
          <div className="input-group-append">
            <button className="btn rounded-pill px-4 text-light mt-sm-0 mt-4" style={{backgroundColor:'#ffa500'}} type="button">Subscribe</button>
          </div>
        </div>

        <div className="row pt-4">

      {/* Left Column - Address */}
      <div className="col-md-4 text-center px-5"> {/* Added ml-3 for extra left margin */}
        <h5>Address</h5>
        <p className='py-3 p-foot'>2698 Hardman Road, Island Pond,Vt,Vermont,05846 </p>
      </div>

      {/* Center Column - Follow Us */}
      <div className="col-md-4 text-center px-5">
        <h5>Follow Us Now</h5>
        <div className="d-flex justify-content-center py-3">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <i class="fa-brands fa-instagram icons py-2"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <i class="fa-brands fa-twitter icons py-2"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <i class="fa-brands fa-facebook icons py-2"></i>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-white">
          <i class="fa-brands fa-youtube icons py-2"></i>
          </a>
        </div>
      </div>

      {/* Right Column - Email */}
      <div className="email col-md-4 text-center px-5 "> {/* Added mr-3 for extra right margin */}
        <h5>Email</h5>
        <p className='py-4 text-center p-foot'>fruitsful@gmail.com</p>
      </div>

    </div>

  </div>
    </footer>
  </>
}
