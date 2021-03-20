import React from "react";

const News = ({ img, title, description, link }) => {
  return (
    <div>
      <div className="card content">
        <div
          className="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img src={img} className="img-fluid" alt={title} />
          <a href="#!">
            <div className="mask"></div>
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary">
            Haberi oku
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
