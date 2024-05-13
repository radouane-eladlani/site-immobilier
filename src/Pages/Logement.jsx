import React, { useEffect, useState } from "react";
import "./Logement.css";
import { Carousel } from "../components/Carousel";
import { useParams } from "react-router-dom";
import { LogementProfil } from "../components/LogementProfil.jsx";
import {ErreurPageNotFound} from "../Pages/ErreurPageNotFound.jsx";

/* La function Logement permet de retourner le composant avec le style */
function Logement() {
    /* Récupération des paramètres de l'URL on le utilisasera pour trouver le logement*/
    const params = useParams();
    /* Déclaration de l'état pour stocker les données du logement et les erreurs, 
    elles sont initialement définies comme null car aucune donnée n'a encore été chargée*/
    const [logementData, setLogementData] = useState(null);
    const [error, setError] = useState(false);

    /*j'utilise useEffect pour gérer le changement du paramètre d'ID du logement*/
    useEffect(() => {
        // Cette section gère la récupération des données du logement à partir d'un fichier JSON
        /*j'utilise un contrôleur d'annulation pour permettre l'annulation de la requête si nécessaire,
        ce qui améliore la réactivité de l'application et la fluidité de l'expérience utilisateur.*/
        const annulerRequete = new AbortController();

        // Requête pour récupérer les données des logements depuis un fichier JSON
        fetch("/logements.json", {
            // Utilisation du signal d'annulation pour permettre l'annulation de la requête si nécessaire
            signal: annulerRequete.signal
        })
            .then((response) => response.json()) // Transformation de la réponse en JSON
            .then((apartement) => {
                // Recherche du logement correspondant à l'ID dans les données récupérées
                const logement = apartement.find((apartement) => apartement.id === params.id);
                /* Si le logement n'est pas trouvé, l'erreur est définie sur true*/
                if (!logement) {
                    setError(true);
                }else{
                    setLogementData(logement);
                }
            })
            .catch((error) => {
                // Gestion de l'erreur : si le logement n'est pas trouvé, l'erreur est définie sur true
                if (error === "Error: Logement introuvable") {
                    setError(true);
                }
            });

        // Retour de la fonction de nettoyage pour annuler la requête en cours lors du démontage du composant
        // Cela garantit que la requête sera annulée si le composant est démonté avant la fin de la requête,
        // ce qui améliore la gestion des ressources et la stabilité de l'application.
        return () => annulerRequete.abort();
    }, [params.id]); // Déclenchement de l'effet lorsque le paramètre d'ID du logement change

    // Si une erreur est survenue, rediriger vers la page 404
    if (error) {
        return <ErreurPageNotFound />;
    }

    // Si les données du logement ne sont pas encore disponibles, afficher un message de chargement
    if (logementData == null) {
        return <div className="loading">loading...</div>;
    }

    // Affichage du contenu du logement une fois que les données sont disponibles
    return (
        <div className="page__logement">
            <div>
                {/* Affichage d'un carrousel avec les images du logement */}
                <Carousel pictures={logementData.pictures} />
            </div>
            <div>
                {/* Affichage du profil du logement */}
                <LogementProfil logementData={logementData} />
            </div>
        </div>
    );
}

// Exportation du composant Logement
export default Logement;
