import React from "react";

import img4 from './images/img4.jpeg';

import img5 from './images/img5.jpeg';

import img6 from './images/img6.jpeg';

import img7 from './images/img7.jpeg';

import img8 from './images/img8.jpeg';

import img9 from './images/img9.jpeg';

import img10 from './images/img10.jpeg';


function Services() {
  return (
    <>
      <div className="container-fluid container-margin my-4">
        <div className="row padding">
          <div className="col-md-4">
            <div className="card">
              <img
                src={img4}
                className="card-img-top"
                style={{ height: "255px" }}
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">DIGITAL MARKETING</h4>
                <p className="card-text">
                  You can simply acquire new clients via ex. Social Media
                  channels and with the change and evolution of modern
                  technologies, small and medium businesses are doing everything
                  they can to keep up, which can be said true for the rest of
                  human society.thus digital things will give the product we can
                  check online.
                </p>
                <a href="" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={img5}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">IT CONSULTING</h4>
                <p className="card-text">
                  We can assist you in ensuring that your IT is able to quickly
                  and efficiently adapt to new business requirements.Consultant
                  is usually an expert or an experienced professional in a
                  specific field and has a wide knowledge.
                </p>
                <a href="" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={img6}
                className="card-img-top"
                style={{ height: "280px" }}
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">BPO</h4>
                <p className="card-text">
                  We provide web designing service will help you in designing
                  your own website. Your website is the symbolic representation
                  of your company. Where you cannot reach personally, your
                  website can in a matter of seconds to reach.
                </p>
                <a href="" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row padding mt-5">
          <div className="col-md-4">
            <div className="card">
              <img
                src={img7}
                className="card-img-top"
                style={{ height: "330px" }}
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Graphics designing</h4>
                <p className="card-text">
                  Aryavart design and create fields involved in the planning,
                  creation, and arrangement of visual elements to communicate a
                  message or convey a specific idea. create visually appealing
                  and impactful designs.
                </p>
                <a href="" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={img8}
                className="card-img-top"
                style={{ height: "280px" }}
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Mobile development</h4>
                <p className="card-text">
                  We offer a full cycle of application design, integration and
                  management services. Whether it is a consumer oriented app or
                  a transformative enterprise-class solution, the company leads
                  the entire mobile app development process from ideation and
                  concept to delivery, and to ongoing ongoing support.
                </p>
                <a href="" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={img9}
                className="card-img-top"
                style={{ height: "280px" }}
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Staffing</h4>
                <p className="card-text">
                  We are serving various industries and startups in Hospitality,
                  Education, Edtech, E-Commerce, and many more. Where we cater
                  them from entry-level to mid-level positions. We would be glad
                  to serve your organisation as well and would like to be a part
                  of your growth journey.
                </p>
                <a href="" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid container-margin">
        <div className="row text-center">
          <div className="col-12">
            <h1 className="display-4 mt-5">TECHNOLOGIES</h1>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <img
              src={img10}
              style={{ width: "100%", height: "700px" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
