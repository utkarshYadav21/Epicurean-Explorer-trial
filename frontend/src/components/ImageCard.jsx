import React from "react";

const ImageCard = ({ imageSrc, title, description,onClick }) => (

    <div className="image-card" style={{cursor:"pointer"}} onClick={onClick}>
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );

export default ImageCard;