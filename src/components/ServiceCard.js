import React from "react";

import { Link } from "react-router-dom";
function ServiceCard({title,description,height,imgpath,readmoreUrl}) {
  return (
    <>
      <div className="col-md-4">
        <div className="card">
          <img
            src={imgpath}
            className="card-img-top"
            style={{ height: height }}
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">
              {description}
            </p>
            <Link to ={readmoreUrl} className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
