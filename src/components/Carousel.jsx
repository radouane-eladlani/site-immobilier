import React from "react";
import "./Carousel.scss";

/* La function carousel permet de retourner le composant avec le style */
export function Carousel(props) {
  /* On utilise la props.pictures pour afficher les images du logement */
  const pictures = props.pictures;
  /* On utilise useState 0 pour avoir le premier image du logement par defaut */
  const [pictureIndex, setPictureIndex] = React.useState(0);
  /* On utilise la function suivantePicture et precedentePicture pour changer l'image de logement.
  la division (%) assure que l'index reste dans les limites du tableau. 
  Cela permet de boucler sur les images, passant de la dernière à la première */
  const suivantePicture = () => {
    const suivantIndex = (pictureIndex + 1) % pictures.length;
    setPictureIndex(suivantIndex);
  };
  const precedentePicture = () => {
    const precedentIndex = (pictureIndex - 1 + pictures.length) % pictures.length;
    setPictureIndex(precedentIndex);
  };
  /* On utilise la class image_location pour afficher les images du logement */
  /* On utilise la function suivantePicture et precedentePicture pour defiler les images du logement */
  /* Afficher le nombre de photo dans le carousel */
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
