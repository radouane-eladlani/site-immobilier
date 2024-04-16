import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";


/*la function LocGrille permet de retourner le composant LocGrille avec le style*/
function Card(props) {
const state = {
  locationId: props.id,
  locationImages: props.images,


};

  return (
    <Link className="text_decoration" to="/logement" state={state}>

      <div>
        <div className="location">
          <img src={props.imageUrl} alt="location_image" />
          <div className="titreGrille">{props.title} </div>
        </div>


      </div>
    </Link>
  );
}

export default Card;