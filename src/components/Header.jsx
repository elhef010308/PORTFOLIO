import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowHeader(true);
        }, 50);

        return () => clearTimeout(timeout);
    }, []);

    const handleGoToAbout = () => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: 'about' } });
        } else {
            const aboutSection = document.getElementById('about-me');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header>
            <div className={`header ${showHeader ? 'show' : ''}`}>
                <a href='#' className='logo'>
                    &lt;/&gt; Lucy
                    <span className='animate' style={{ '--i': 2 }}></span>
                </a>
                <nav className='navbar'>
                    <ul>
                        <li>
                            <Link to="/">
                                <i className="fa-solid fa-house nav-icon"></i>
                                <span className="nav-text">Accueil</span>
                            </Link>
                        </li>
                        <li>
                            <button onClick={handleGoToAbout}>
                                <i className="fa-solid fa-user nav-icon"></i>
                                <span className="nav-text">À propos</span>
                            </button>
                        </li>
                        <li>
                            <Link to="/cv">
                                <i className="fa-solid fa-file-lines nav-icon"></i>
                                <span className="nav-text">CV</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects">
                                <i className="fa-solid fa-diagram-project nav-icon"></i>
                                <span className="nav-text">Projets</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <i className="fa-solid fa-envelope nav-icon"></i>
                                <span className="nav-text">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;