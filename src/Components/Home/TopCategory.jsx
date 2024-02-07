import React from 'react'

export default function TopCategory() {
  return (
    <>
    
    {/* Cards  */}
    <div className="container pt-5">
      <div className="row ">
        {/* Card 1 */}
        <div className="col-md-3 p-5 ">
          <div className="card groove-border rounded-4">
            <div className="card-body text-center">
            <img src='D:\Goods-master\public\img\WhatsApp Image 2024-02-07 at 13.40.47_9736a782.jpg' alt=''/>

             
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3 p-5">
          <div className="card groove-border rounded-4">
            <div className="card-body text-center">
            <i class="icon-2 fa-solid fa-file-invoice-dollar icon"></i>
              <h4 className="mt-3">Money Back</h4>
              <p>We 're always here for you. Contact our 24/7 support for help with any questions or concerns</p>
            </div>
          </div>
        </div>
                {/* Card 3 */}
                <div className="col-md-3 p-5">
          <div className="card groove-border rounded-4">
            <div className="card-body text-center">
            <i class="icon-2 fa-solid fa-file-invoice-dollar icon"></i>
              <h4 className="mt-3">Money Back</h4>
              <p>We 're always here for you. Contact our 24/7 support for help with any questions or concerns</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3 p-5">
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
  )
}
