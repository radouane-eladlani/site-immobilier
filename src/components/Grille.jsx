import React, { useEffect, useState } from "react";
import "./Grille.scss";
import Card from "./Cards.jsx";


/*la function locationGrille permet de retourner le composant locationGrille avec le style*/
function Grille() {
    const [logements, setLogements] = useState([]);

    useEffect(fetchLocationLogement, []);

    function fetchLocationLogement(id) {
        fetch(`logements.json`)
            .then((res) => res.json())
            .then((res) => setLogements(res))
            .catch(console.error)
    }

    return (
        <div className="grille">
            {logements.map((logement) => (
                <Card key={logement.id} title={logement.title} imageUrl={logement.cover} id={logement.id} />
            ))}
        </div>
    );
}
export default Grille;