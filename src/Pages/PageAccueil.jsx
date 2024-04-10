import React from "react";
import Banner from "../components/Banner.jsx";
import "./PageAccueil.css";


/*la function permet de 
retourner les composants Banner et Grille*/
function PageAccueil() {
  /* on utilise le composant Banner et Grille
  pour les afficher sur la page */
  return (
    <>
      <Banner/>
    </>
  );
}

export default PageAccueil