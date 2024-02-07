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
      }, []);
    

  return (
    <>
     <div className="container d-flex justify-content-center ms-3">
     <div className=" sale">
     <h2 className="">Blog & News</h2>
     <div className="row mt-4 m-5">
     <div  className="position-relative col-md-4  col-sm-6 mt-1">
              <div
                className="card position-relative border-red cardN"
                style={{ width: "20rem" ,  height:"22rem"}}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                  className=" img_card card-img-top img-fluid my-3  m-auto mb-2"
                  alt="..."
                />

                <div className="card-body mt--15">
                  <p className=" text-muted fs-10px mb-0 mt-0">Augest,07,2022</p>
                  <p className="card-text fw-bold  my-4 fs-14px">
                    {`Going Green: New Organic Products Now Available in Store hi am joe how are you!`.split(" ").slice(0,9).join(" ")}
                  </p>


                  <div className="d-grid gap-2 col-6 mx-auto ">
                    <Link to="/#"
                      className=" reedmore"
                      type="button"
                    >
                      Read More &gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* //////// */}
            <div  className="position-relative col-md-4  col-sm-6 mt-1">
              <div
                className="card position-relative border-red cardN"
                style={{ width: "20rem" ,  height:"22rem"}}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                  className=" img_card card-img-top img-fluid my-3  m-auto mb-2"
                  alt="..."
                />

                <div className="card-body mt--15">
                  <p className=" text-muted fs-10px mb-0 mt-0">Augest,07,2022</p>
                  <p className="card-text fw-bold  my-4 fs-14px">
                    {`Going Green: New Organic Products Now Available in Store hi am joe how are you!`.split(" ").slice(0,9).join(" ")}
                  </p>


                  <div className="d-grid gap-2 col-6 mx-auto ">
                    <Link to="/#"
                      className=" reedmore"
                      type="button"
                    >
                      Read More &gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ////////// */}
            <div  className="position-relative col-md-4  col-sm-6 mt-1">
              <div
                className="card position-relative border-red cardN"
                style={{ width: "20rem" ,  height:"22rem"}}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                  className=" img_card card-img-top img-fluid my-3  m-auto mb-2"
                  alt="..."
                />

                <div className="card-body mt--15">
                  <p className=" text-muted fs-10px mb-0 mt-0">Augest,07,2022</p>
                  <p className="card-text fw-bold  my-4 fs-14px">
                    {`Going Green: New Organic Products Now Available in Store hi am joe how are you!`.split(" ").slice(0,9).join(" ")}
                  </p>


                  <div className="d-grid gap-2 col-6 mx-auto ">
                    <Link to="/#"
                      className=" reedmore"
                      type="button"
                    >
                      Read More &gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

     </div>
     <Link to="/Shop" col-sm-12>
        <div className="text-left d-flex w-100  justify-content-end ">
          <button className="btn btn-outline-dark w-15 All_News mt-3  ">
            {" "}
            All News &gt;{" "}
          </button>
        </div>
      </Link>
     </div>
     </div>
    </>
  )
}
