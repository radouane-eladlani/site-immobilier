import React from "react";
import "./Carousel.scss";

export function Carousel(props) {
  const pictures = props.pictures;
  const [pictureIndex, setPictureIndex] = React.useState(0);

  const suivantePicture = () => {
    const suivantIndex = (pictureIndex + 1) % pictures.length;
    setPictureIndex(suivantIndex);
  };
  const precedentePicture = () => {
    const precedentIndex = (pictureIndex - 1 + pictures.length) % pictures.length;
    setPictureIndex(precedentIndex);
  };

  return (
    <div className="image_location">
      {pictures.map((picture, index) => (
        <img
          key={index}
          src={picture}
          alt="les images d'appartement de location"
          className={`location_image ${index === pictureIndex ? "active" : ""}`}
        />
      ))}
      {pictures.length > 1 && (
        <div className="suivant_precedent">
          <i className="fa fa-chevron-left" onClick={precedentePicture}></i>
          <i className="fa fa-chevron-right" onClick={suivantePicture}></i>
        </div>
      )}
      <div className="nombrePhoto">
        {pictureIndex + 1} / {pictures.length}
      </div>
    </div>
  );
}
