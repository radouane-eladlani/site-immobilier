import React from "react"
import "./Main.css"
/* on utilise la function Main pour avoir les marges dans toute les pages du site */
function Main(props) {
/*on utilise props.children pour pouvoir utiliser la function Main dans les
autres pages du site*/
    let children = props.children;
    /* on utilise Array.isArray pour savoir si la variable children est un array */
    if (!Array.isArray(children)) {
        children = [children];
    }
    return <div className="main">{children}</div>
}

export default Main