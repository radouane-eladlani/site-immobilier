import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";


/*la function card permet de retourner le composant avec le style*/
function Card(props) {

  return (
    /*on utilise le composant Link pour rediriger vers la page du logement avec id*/
    <Link className="text_decoration" to={`/logement/${props.id}`}>

      <div>
        <div className="logement">
          <img src={props.imageUrl} alt="logement_image" />
          <div className="titreLogement">{props.title} </div>
        </div>
      </div>

    </Link>
  );
}

export default Card;