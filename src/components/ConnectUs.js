import React from "react";

function ConnectUs() {
  return (
    <div className="container-fluid container-margin">
      <div className="row text-center padding">
        <div className="col-12 mt-5">
          <h1>Connect</h1>
        </div>
        <div className="col-12 social padding mt-4">
          <a
            href=" https://www.facebook.com/attits.org?mibextid=ZbWKwL"
            target="_blank"
          >
            <i
              className="fa-brands fa-facebook"
              style={{fontSize: "50px", padding: "40px",color: "#3b5998"}}
            ></i>
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/company/aryavart-expo-staffing-solutions/"
            target="_blank"
          >
            <i
              className="fa-brands fa-linkedin"
              style={{fontSize: "50px", padding: "40px"}}
            ></i>
          </a>
          <a
            href=" https://instagram.com/aryavart_staffing_solutions?igshid=ZGUzMzM3NWJiOQ=="
            target="_blank"
          >
            <i
              className="fa-brands fa-instagram"
              style={{fontSize: "50px", padding: "40px"}}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConnectUs;
