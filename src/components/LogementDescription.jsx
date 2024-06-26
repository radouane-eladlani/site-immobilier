import React, { useState } from 'react';
import './LogementDescription.scss';

/* on utilise la function locationDescription pour afficher le titre et le contenu  */
export function LogementDescription(props) {
  /* on utilise useState false pour avoir le conte,u pas afficher par defaut */
  const [contentVisible, setContentVisible] = useState(false);
  /* on utilise useState up pour avoir le chevron vers le haut par defaut */
  const [arrowDirection, setArrowDirection] = useState("up");
const [contentClassName, setContentClassName] = useState("slide-up");
  /* on utilise la function toggleContentVisibility pour afficher le contenu ou non avecup ou down */
  const toggleContentVisibility = () => {
    setContentVisible(!contentVisible);
    setArrowDirection(contentVisible ? "up" : "down");
    setContentClassName(contentVisible ? "slide-down" : "slide-up");
  };
  /* on utilise la props.title et props.contenu pour afficher le titre et le contenu */
  return (
    <div className="page_location_description">
      <div className="description_titre">
        <span>{props.title}</span>
        <i className={`fa-solid fa-chevron-${arrowDirection} fa-xl`} onClick={toggleContentVisibility}></i>
      </div>
      {contentVisible && <div className={`description_texte ${contentClassName}`}>{props.contenu}</div>}
    </div>
  );
}