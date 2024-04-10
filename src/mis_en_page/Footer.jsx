import React from "react";
import "./Footer.css";
import Logo_footer from "../assets/images/Logo_footer.png"

/*la function Footer permet de retourner le composant Footer avec le style*/
function Footer() {
    return (
        <div className="footer">
            <img src={Logo_footer} alt="Logo Kasa" />
                <p>© 2020 Kasa. Tous droits réservés.</p>
            </div>
    );
}

export default Footer;
