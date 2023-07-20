import React from "react";

import img1 from './images/img10.jpeg'
import ServiceCard from "./ServiceCard";

let data = [
  {
    title: "DIGITAL MARKETING",
    description:
      "You can simply acquire new clients via ex. Social Media channels and with the change and evolution of modern technologies, small and medium businesses are doing everything they can to keep up, which can be said true for the rest of human society.thus digital things will give the product we can check online.",
    height: "255px",
    imgpath: "https://live.staticflickr.com/65535/53059133784_9a4d989979_m.jpg",
  },
   {
    title: "IT CONSULTING",
    description:
      "We can assist you in ensuring that your IT is able to quickly and efficiently adapt to new business requirements.Consultant is usually an expert or an experienced professional in a specific field and has a wide knowledge.",
    height: "280px" ,
    imgpath: "https://live.staticflickr.com/65535/53059334555_1e72bf30e1_m.jpg",
  },
  {
    title: "Medical Coding Services",
    description:
      "Coding service is a key activity that has a direct impact on the financial status of your practice. We have specialized expertise, niche focus, and infrastructure to support your requirements.Get access to certified coders with experience in outpatient, inpatient, & emergency department coding.",
    height: "255px",
    imgpath: "https://live.staticflickr.com/65535/53059493593_3b34cb2a7a_m.jpg",
    readmoreUrl: "/services/medicalcode"
  },
  {
    title: "Graphics designing",
    description:
      "Aryavart design and create fields involved in the planning, creation, and arrangement of visual elements to communicate a message or convey a specific idea. create visually appealing and impactful designs.",
    height: "330px",
    imgpath: "https://live.staticflickr.com/65535/53059133734_068075acc7_m.jpg",
  },
  {
    title: "Mobile development",
    description:
      " We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.",
    height: "280px",
    imgpath: "https://live.staticflickr.com/65535/53059334495_8f3727e350_m.jpg",
  },
  {
    title: "Staffing",
    description:
      "We are serving various industries and startups in Hospitality, Education, Edtech, E-Commerce, and many more. Where we cater them from entry-level to mid-level positions. We would be glad to serve your organisation as well and would like to be a part of your growth journey.",
    height: "280px",
    imgpath: "https://live.staticflickr.com/65535/53058366707_2711b8c532_m.jpg",
  },
];

function Services() {
  return (
    <>
      <section id="services">
        <div className="container-fluid container-margin">
          <div className="row text-center">
            <div className="col-12">
              <h1 className="display-4 mt-5">SERVICES</h1>
              <hr />
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid container-margin my-4">
        <div className="row padding">
          <ServiceCard {...data[0]} />
          <ServiceCard {...data[1]}/>
          <ServiceCard {...data[2]}/>
        </div>

        <div className="row padding mt-5">
         <ServiceCard {...data[3]}/>
         <ServiceCard {...data[4]}/>
         <ServiceCard {...data[5]}/>
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
              src= {img1}
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
