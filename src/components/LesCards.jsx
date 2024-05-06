import React, { useEffect, useState } from "react";
import "./LesCards.scss";
import Card from "./Card.jsx";


/*la function LesCards permet de retourner le composant avec les donnes du fichier json */
function LesCards() {
    /* On crée un état 'logements' qui est un tableau vide, et un hook 'setLogements' pour le mettre à jour.*/
    const [logements, setLogements] = useState([]);

    /* useEffect permet d'exécuter une action après le rendu initial du composant.
     Le premier argument est la fonction fetchLogements qui sera exécutée après le rendu initial. 
     et le deuxième argument est un tableau vide [], ce qui signifie que cette fonction 
     sera exécutée uniquement après le premier rendu du composant.*/
    useEffect(fetchLogements, []);

    // On utilise fetch pour récupérer les données du fichier JSON.
    function fetchLogements() {
        fetch(`logements.json`)
            .then((res) => res.json())
            /*Une fois les données récupérées, on met à jour l'état 'logements' avec les données obtenues.*/
            .then((res) => setLogements(res))
            .catch(console.error)
    }
/* On mappe sur le tableau 'logements' pour afficher une card par pour chaque logement. 
Chaque carte a une clé unique définie par l'ID du logement ainsi qu'une image et un titre. 
Cela permet de lier les informations du logement à la card.*/
    return (
        <div className="card">
            {logements.map((logement) => (
                <Card key={logement.id} title={logement.title} imageUrl={logement.cover} id={logement.id} />
            ))}
        </div>
    );
}
export default LesCards;