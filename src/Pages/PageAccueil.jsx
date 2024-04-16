import React from "react";
import Banner from "../components/Banner.jsx";
import Grille from "../components/Grille.jsx";
import "./PageAccueil.css";


/*la function app permet de 
retourner les composants Banner et Grille*/
function PageAccueil() {
  /* on utilise le composant Banner et Grille dans 
App pour les afficher sur la page */
  return (
    <>
      <Banner/>
      <Grille/> 
    </>
  );
}

export default PageAccueil