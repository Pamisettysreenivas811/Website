import React from "react";

import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h3 className="display-2 text-white">
                We are leading full- service provider Business solutions for
                growing enterprises
              </h3>
              <Link to="/about" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section>
        <div className="container-fluid padding mt-5">
          <div className="row welcome text-center">
            <div className="col-12 mb-4">
              <h1 className="display-4">
                Welcome to Aryavart Staffing Solutions
              </h1>
            </div>
            <hr />
            <div className="col-12">
              <p className="lead mt-5">
                Aryavart Expo Staffing Solutions is a team of highly experienced
                software architects, managers and technology professionals. The
                company has implemented numerous projects. Our mission is to
                provide fast paced and efficient solutions in the area of
                e-commerce, Business Intelligence, Data Warehouse, m-commerce,
                application development and integration, database development,
                CRM and Mobile computing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
