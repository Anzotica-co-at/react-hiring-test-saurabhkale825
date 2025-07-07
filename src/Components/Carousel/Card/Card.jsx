import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <article className="card" aria-label={`Property: ${data.propertyName}`}>
      
      {/* Image */}
      <figure className="card-img-container">
        <img
          src={data.img}
          alt={`Image of ${data.propertyName}`}
          width="100%"
          height="100%"
        />
      </figure>

      {/* Textual Content */}
      <div className="card-data-container">
        <div className="card-data-inner-container">
          <p className="card-text" aria-hidden="true">Now Open</p>
          <h3 className="card-propertyName">{data.propertyName}</h3>
          <p className="card-description">{data.propertyDescription}</p>
          <p className="card-location">{data.location}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
