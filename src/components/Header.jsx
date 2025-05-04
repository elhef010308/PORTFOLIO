import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header({ isProjectsPage }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        // Lance l'animation 50ms après le montage
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
                        <li><Link to="/">Accueil</Link></li>
                        <li><button onClick={handleGoToAbout}>À propos</button></li>
                        <li><Link to="/cv">CV</Link></li>
                        <li><Link to="/projects">Projets</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;