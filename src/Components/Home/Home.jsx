import React from 'react';
import '../Home/Home.css';
import Helmet from 'react-helmet';






export default function Home() {

  const imageUrl1 = "https://cdn.pixabay.com/photo/2023/10/27/14/28/alps-8345488_640.jpg";
  const imageUrl2 = "https://cdn.pixabay.com/photo/2023/10/27/14/28/alps-8345488_640.jpg";
  return <>

<Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="The home of the website" />
                <title>Home Page</title>
              
            </Helmet>
  
  <div className=" mt-5 m-5 px-5" style={{color:'black'}}>
      <h1 className="display-4 fw-bold ">JO the <span style={{color:'green'}}>taste of pure <br />nature</span> anytime anywhere</h1>
      <p className="lead mt-5 fw-semibold">
       Discover nature's best at our organic online store. <br />
       Convenient delivery, high quality products, <br />
       and a commitment to organic options, <br />
       Start shopping now and experience the difference.
      </p>
      <button className="btn btn-danger btn-sm rounded-pill mt-4 px-4 py-2">
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



     {/* New Section */}
     {/* First Section - Image on the Right, Content on the Left */}
     <section className="container mt-5 pt-5">
  <div className="row justify-content-center align-items-center">

    {/* Section 1 */}
    <div className="col-lg-6 col-md-8 mb-md-0">
      {/* Image */}
      <div className="rounded-rectangle-image text-center">
        <img src={imageUrl2} alt="Your Alt Text 2" className="img-fluid rounded-5 mx-auto d-block" />
      </div>
    </div>

    <div className="col-lg-6 col-md-9">
      {/* Text content */}
      <div className="content-right text-black px-4 px-md-5 mt-5 d-flex flex-column justify-content-between">
        <div>
          <h4 className='fw-bold '>Study Shows Link Between Organic Food And Improved Health</h4>
          <p className='fw-semibold my-4'>A recent study has shown that consuming organic food may be linked to improved health outcomes. The study, which analyzed data from thousands of participants over several years, found that those who consumed organic food had lower rates of certain health conditions, such as allergies and digestive issues.
            <br />
            <br />
            Organic food is free from synthetic pesticides and fertilizers, which can have negative impacts on both the environment and human health. By choosing organic, consumers can reduce their exposure to harmful chemicals and support a more sustainable food system.
          </p>
        </div>
        
        {/* Button */}
        <div className="text-end">
          <button className="btn btn-light button-border btn-sm rounded-pill px-3 py-2 mx-3 mt-2 my-4">
            <span className='m-3 fw-bold'>Read More</span>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>

    {/* Section 2 */}
    <div className="row justify-content-center align-items-center">

{/* Image with a button */}
<div className="col-lg-6 col-md-8 my-5 order-md-1 order-lg-last">
  <div className="rounded-rectangle-image">
    <img src={imageUrl1} alt="Your Alt Text 1" className="img-fluid rounded-5 mx-auto d-block" />
  </div>
</div>


{/* Text content */}
<div className="col-lg-6 col-md-9 order-md-2 order-lg-first">
  <div className="content-left text-black px-4 px-md-5  d-flex flex-column justify-content-between h-100">
    <div>
      <h4 className='fw-bold'>Try Our Delicious And Healthy Organic Kale Salad Recipe!</h4>
      <p className='fw-semibold my-4'>Looking for a healthy and tasty recipe that's packed with nutrients? Our organic kale salad recipe is just what you need! Made with fresh, organic ingredients, this salad is not only delicious but also incredibly nutritious.
        <br />
        <br />
        To make this salad, you will need a bunch of organic kale, a ripe organic avocado, a crunchy organic apple, some organic walnuts, organic dried cranberries, organic crumbled feta cheese, organic olive oil, organic apple cider vinegar, organic honey, and salt and pepper to taste.
      </p>
    </div>

    {/* Button */}
    <div className="text-end mt-4">
      <button className="btn btn-light button-border btn-sm rounded-pill px-3 py-2 mx-3 my-4">
        <span className='m-3 fw-bold'>Read More</span>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
</div>
</div>
</div>
</section>


{/*image and text*/}
<div className="container-fluid pt-5 mt-5 mx-5 px-5 pb-5 mb-5">
      <div className="row">
        {/* First half */}
        <div className="col-md-6 d-flex justify-content-start align-items-center">
          <div>
            <h1 className='text-danger fw-bold text-large'>For All Grocery Product</h1>
            <h4 className='fw-bold pt-5'>Take Now <span className='green-text'>30%</span>  Off For All Grocer Product</h4>
            <div className='pt-5'>
            <button className="btn btn-danger btn-sm rounded-pill mt-4 px-4 py-2">
 <span className='m-3'>Shop Now</span> 
 <i className="fa-solid fa-chevron-right"></i>
</button>
          </div>
        </div>
     </div>
        {/* Second half */}
        <div className="col-md-6">
          <img src={require("../Home/imgs/lab.jpeg")} alt="Your Image" className="img-fluid img-large rounded-5" />
        </div>
      </div>
    </div>



    </>
  

}