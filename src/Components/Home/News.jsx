import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./News.css";


export default function News() {
    const [News, setNews] = useState([]);
    async function getNews() {
        await axios
          .get("http://195.35.29.81:8004/api/Product/GetProducts", News)
          .then((response) => {
            setNews(response.data.products);
            console.log(response.data.products);
          })
          .catch((error) => {});
      }
    
      useEffect(() => {
        getNews();
      });
    

  return (
    <>
     <div className="container ms-5rem ms-3rem">
     <h2 className="px-4 px-5rem ">Blog & News</h2>
     <div className=" blog">
     <div className="row mt-3 d-flex justify-content-center gap-3rem ">
     <div  className="position-relative col-md-4 col-lg-4 col-sm-6 mt-1 me-7rem">
              <div
                className="card position-relative border-red cardN"
                style={{ width: "22rem"}}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                  className=" img_card card-img-top img-fluid my-3  m-auto mb-2"
                  alt="..."
                />

                <div className="card-body mt--15">
                  <p className=" text-muted fs-10px mb-0 mt-0 ms-2 me-4rem">Augest,07,2022</p>
                  <p className="card-text fw-bold  my-4 fs-14px">
                    {`Going Green: New Organic Products Now Available in Store hi am joe how are you!`.split(" ").slice(0,9).join(" ")}
                  </p>


                  <div className="d-grid gap-2 col-6 mx-auto ">
                    <Link to="/#"
                      className=" reedmore text-end"
                      type="button"
                    >
                      Read More &gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* //////// */}
            <div  className="position-relative col-md-4 col-lg-4 col-sm-6 mt-1 me-4rem">
              <div
                className="card position-relative border-red cardN"
                style={{ width: "22rem"}}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                  className=" img_card card-img-top img-fluid my-3  m-auto mb-2"
                  alt="..."
                />

                <div className="card-body mt--15">
                  <p className=" text-muted fs-10px mb-0 mt-0 ms-2">Augest,07,2022</p>
                  <p className="card-text fw-bold  my-4 fs-14px">
                    {`Going Green: New Organic Products Now Available in Store hi am joe how are you!`.split(" ").slice(0,9).join(" ")}
                  </p>


                  <div className="d-grid gap-2 col-6 mx-auto ">
                    <Link to="/#"
                      className=" reedmore text-end"
                      type="button"
                    >
                      Read More &gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ////////// */}
            <div  className="position-relative col-md-4 col-lg-4 col-sm-6 mt-1">
              <div
                className="card position-relative border-red cardN"
                style={{ width: "22rem" }}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                  className=" img_card card-img-top img-fluid my-3  m-auto mb-2"
                  alt="..."
                />

                <div className="card-body mt--15">
                  <p className=" text-muted fs-10px mb-0 mt-0 ms-2">Augest,07,2022</p>
                  <p className="card-text fw-bold  my-4 fs-14px">
                    {`Going Green: New Organic Products Now Available in Store hi am joe how are you!`.split(" ").slice(0,9).join(" ")}
                  </p>


                  <div className="d-grid gap-2 col-6 mx-auto ">
                    <Link to="/#"
                      className=" reedmore text-end"
                      type="button"
                    >
                      Read More &gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>


     <Link to="/Shop" col-sm-12>
        <div className="text-left d-flex w-100 mt-3 justify-content-end ">
          <button className="btn btn-outline-dark w-15 All_News ">
            {" "}
            All News &gt;{" "}
          </button>
        </div>
      </Link>
     </div>
     </div>
     </div> 
    </>
  )
}
