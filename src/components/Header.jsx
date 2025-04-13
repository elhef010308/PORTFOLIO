import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoToAbout = () => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: 'about' } });
        } else {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

    };

    return (
        <header>
            <div className="header">
                <a href="#" class="logo">&lt;/&gt; Lucy<span class='animate' style={{ '--i': 2 }}></span></a>
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