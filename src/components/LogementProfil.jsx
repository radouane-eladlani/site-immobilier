import React from "react";
import "./LogementProfil.scss";

export function LogementProfil (props) {
    const name = props.locationData.host.name;
    const [firstName, lastName] = name.split(" ");
    return (
        <div className="display_flex_profil">
               <div className="display_flex_titre">
                <h1 className="page_location_titre_de_la_location">{props.locationData.title} </h1>
                    <h2 className="page_location_titre_ville "> {props.locationData.location} </h2>
                    
                    <div className="page_location_les_spans">
                    {props.locationData.tags.map((tag) => (
                        <span key={tag} className="page_location_span" > {tag}</span>
                    ))}
                    </div>
               </div>
                <div className="display_profil_proprietaire">
                    <div className="page_location_profil_proprietaire">
                        <h3 className="page_location_nom_proprietaire">{firstName} <br />{lastName} </h3>
                        <div className="page_location_profil_proprietaire_badge">
                            <img src={props.locationData.host.picture} alt="" />
                        </div>
                    </div>
                    <div className="page_location_profil_proprietaire_etoile">
                        {[1,2,3,4,5].map((etoile) => (
                            <span key= {etoile} className={props.locationData.rating >= etoile ? "rouge" : "grise"}>★</span>
                        ))}
                    </div> 

                </div>
            </div>
    );
}

