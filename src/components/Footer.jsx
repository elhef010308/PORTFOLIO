import { Link } from "react-router-dom";   // Demander à ChatGPT


// créer une fonction pour remonter en haut de la page
// activer cette fonction via ONCLICK dans le bouton

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="link-footer">
                    <button><Link></Link></button>
                    <button><Link></Link></button>
                    <button><Link></Link></button>
                </div>

                <div className="info-footer">
                    <p className="p-footer-1">Fougerard Lucy</p>
                    <p className="p-footer-2">Copyright © 2025 Lucy FOUGERARD • Tous droits réservés</p>
                </div>

                <div className="button-footer">
                </div>
            </div>
        </footer>
    )
}

export default Footer;