import React from "react";
import "./PageApropos.scss";
import { LogementDescription } from "../components/LogementDescription";

/* La function PageApropos permet de retourner le composant avec le style */
function PageApropos() {
    return (
        <>
            < div className="apropos_banner"></div>
            <div className="width">
                <LogementDescription title="Fiabilité" contenu="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
                <LogementDescription title="Respect" contenu="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <LogementDescription title="Service" contenu="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
                <LogementDescription title="Sécurité" contenu="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
        </>
    );

}
export default PageApropos
