import React, { useEffect, useState } from "react";
import "./Logement.css";
import { Carousel } from "../components/Carousel";
import { Navigate, useParams } from "react-router-dom";
import { LogementProfil } from "../components/LogementProfil.jsx";

function Logement() {
    const params = useParams();
    const [logementData, setLogementData] = useState(null);
    const [error, setError] = useState(false);
    useEffect(() => {
        const annulerRequete = new AbortController();
        fetch("/logements.json", {
            signal: annulerRequete.signal
        })
            .then((response) => response.json())
            .then((apartement) => {
                const logement = apartement.find((apartement) => apartement.id === params.id);
                if (!logement) {
                    throw new Error("Logement introuvable");
                }
                setLogementData(logement);
            })
            .catch((error) => {
                if (error == "Error: Logement introuvable") {
                    setError(true);
                }
            });
        return () => annulerRequete.abort();

    }, [params.id]);
    if (error) {
        return <Navigate to="/404" />;
    }

    if (logementData == null) {
        return <div className="loading">loading...</div>
    }
    return (
        <div className="page__location">
            <div>
                <Carousel pictures={logementData.pictures} />
            </div>
            <div>
                <LogementProfil logementData={logementData} />
            </div>
        </div>
    );
}
export default Logement

