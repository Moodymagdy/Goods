import React from "react";
import "./TopCategory.css";
import { Link } from "react-router-dom";

export default function TopCategory() {
  return (
    <>
      {/* Cards  */}
      <div className="container pt-5 PerCategory">
        <div className="row ">
            <h2 className="px-5">Top Category</h2>
          {/* Card 1 */}
          <div className="col-md-3 p-5 p-4rem ">
            <div className="card groove-border category bg-card">
              <div className="card-body text-center ">
                <img
                  src={require("../Home/imgs/WhatsApp Image 2024-02-07 at 13.40.47_9736a782.jpg")}
                  className="card-img-top img-fluid my-2 w-75 m-auto mb-2 img_border img_categ"
                  alt="..."
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 p-5 p-4rem">
            <div className="card groove-border category bg-card">
              <div className="card-body text-center ">
              <img
                  src={require("../Home/imgs/WhatsApp Image 2024-02-07 at 13.41.11_63006563.jpg")}
                  className="card-img-top img-fluid my-2 w-75 m-auto mb-2 img_border img_categ"
                  alt="..."
                />
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-md-3 p-5 p-4rem">
            <div className="card groove-border category bg-card">
              <div className="card-body text-center">
              <img
                  src={require("../Home/imgs/WhatsApp Image 2024-02-07 at 13.41.29_90e00778.jpg")}
                  className="card-img-top img-fluid my-2 w-75 m-auto mb-2 img_border img_categ"
                  alt="..."
                />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3 p-5 p-4rem bg-card">
            <div className="card groove-border category bg-card">
              <div className="card-body text-center ">
              <img
                  src={require("../Home/imgs/WhatsApp Image 2024-02-07 at 13.41.48_9a1f8a35.jpg")}
                  className="card-img-top img-fluid my-2 w-75 m-auto mb-2 img_border img_categ"
                  alt="..."
                />
              </div>
            </div>
          </div>

        </div>
      </div>
            <Link to="/#">
            <div className="col-sm-6 text-left d-flex w-100  justify-content-end  ">
            <button className="btn btn-danger showMore"> Show more &gt; </button>
            </div>
        </Link>
    </>
  );
}
