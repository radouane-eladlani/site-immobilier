import React, { useEffect, useState } from "react";
import "./Logement.css";
import { Carousel } from "../components/Carousel";
import { useLocation } from "react-router-dom";
import { LogementProfil } from "../components/LogementProfil.jsx";

function Logement() {
    const location = useLocation();
    const [locationData, setLocationData] = useState(null);

    useEffect(() => {
        const annulerRequete = new AbortController();
        fetch("logements.json", {
            signal: annulerRequete.signal
        })
            .then((response) => response.json())
            .then((apartement) => {
                const logement = apartement.find((apartement) => apartement.id === location.state.locationId);
                setLocationData(logement);
            })
            .catch((error) => console.log(error));
        return () => annulerRequete.abort();

    });

    if (locationData == null) {
        return <div className="loading">loading...</div>
    }
    return (
        <div className="page__location">
            <div>
                <Carousel pictures={locationData.pictures} />
            </div>
            <div>
                <LogementProfil locationData={locationData} />
            </div>
            </div>
    );
}
export default Logement

            