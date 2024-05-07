import React from "react";
import "./LogementProfil.scss";
import { LogementDescription } from "./LogementDescription";

/*La function LogementProfil permet de retourner le composant avec le style */
export function LogementProfil(props) {
    /* On utilise la variable name pour afficher le nom et le prenom du proprietaire avec un espace ' ' */
    const name = props.logementData.host.name;
    const [firstName, lastName] = name.split(" ");

    return (
        <>
            <div className="display_flex_profil">
                <div className="display_flex_titre">
                    <h1 className="page_logement_titre_de_la_location">{props.logementData.title} </h1>
                    <h2 className="page_logement_titre_ville "> {props.logementData.location} </h2>

                    <div className="page_logement_les_spans">
                        {props.logementData.tags.map((tag) => (
                            <span key={tag} className="page_logement_span" > {tag}</span>
                        ))}
                    </div>
                </div>
                <div className="display_profil_proprietaire">
                    <div className="page_logement_profil_proprietaire">
                        <h3 className="page_logement_nom_proprietaire">{firstName} <br />{lastName} </h3>
                        <div className="page_logement_profil_proprietaire_badge">
                            <img src={props.logementData.host.picture} alt="" />
                        </div>
                    </div>
                    <div className="page_logement_profil_proprietaire_etoile">
                        {[1, 2, 3, 4, 5].map((etoile) => (
                            <span key={etoile} className={props.logementData.rating >= etoile ? "rouge" : "grise"}>★</span>
                        ))}
                    </div>

                </div>
            </div>
            <div className="page_logement_description_displayflex">
                <LogementDescription title="Description" contenu={props.logementData.description} />
                <LogementDescription title="Equipements" contenu={props.logementData.equipments.map((equipement) => (
                        <div className="padding-top" key={equipement}>{equipement}</div>
                    ))}
                />
            </div>
        </>
    );
}


