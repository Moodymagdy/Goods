import React from 'react';
import '../Home/Home.css';
import Helmet from 'react-helmet';






export default function Home() {
  return <>

<Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="The home of the website" />
                <title>Home Page</title>
              
            </Helmet>
  
  <div className=" mt-5 m-5" style={{color:'black'}}>
      <h1 className="display-4 fw-bold ">Savor the <span style={{color:'green'}}>taste of pure <br />nature</span> anytime anywhere</h1>
      <p className="lead mt-5 fw-semibold">
       Discover nature's best at our organic online store. <br />
       Convenient delivery, high quality products, <br />
       and a commitment to organic options, <br />
       Start shopping now and experience the difference.
      </p>
      <button className="btn btn-danger btn-sm rounded-pill mt-4 px-3 py-2">
 <span className='m-3'>Order Now</span> 
   <i className="fa-solid fa-chevron-right"></i>
</button>
    </div>


    {/* Cards  */}
    <div className="container pt-5">
      <div className="row ">
        {/* Card 1 */}
        <div className="col-md-4 p-5 ">
          <div className="card groove-border rounded-4">
            <div className="card-body text-center">
            <i class=" fa-solid fa-truck-fast icon" ></i>
              <h4 className="mt-3">Free Shiping</h4>
              <p>Enjoy hassie-free shopping and have your orders shipped to you at no cost with our Free Shipping.</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 p-5">
          <div className="card groove-border rounded-4">
            <div className="card-body text-center">
            <i class="icon-2 fa-solid fa-file-invoice-dollar icon"></i>
              <h4 className="mt-3">Money Back</h4>
              <p>We 're always here for you. Contact our 24/7 support for help with any questions or concerns</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 p-5">
          <div className="card groove-border rounded-4">
            <div className="card-body text-center">
            <i className="fa-solid fa-headset icon"></i>
              <h4 className="mt-3">24/7 Support</h4>
              <p>Don't love your purchase? No Problem! We offer a Money Back guarantee for your peace of mind.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  

  </>
}