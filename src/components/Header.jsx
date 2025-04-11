import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Header() {
    return (
        <header>
            <div className="header">
                <img alt='logo' src={logo} />
                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/">A propos</Link></li>
                        <li><Link to="/cv">CV</Link></li>
                        <li><Link to="/projects">Projets</Link></li>
                        <li><Link to="/contact-form">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;