import React from "react";
import "./Banner.scss";

/* la function Banner permet de retourner le composant Banner avec le style */
function Banner() {
    return (
        <div className="banner">
            <h1 className="banner_h1">Chez vous,</h1>
            <h1 className="banner_h1">partout et ailleurs</h1>
        </div>
    );
}
export default Banner;