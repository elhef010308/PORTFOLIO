import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

function Layout({ children }) {
    const location = useLocation(); // on récupère l'URL actuelle
    const isProjectsPage = location.pathname === '/projects'; // on vérifie si on est sur la page des projets 

    return (
        <div className='layout'>
            <Header isProjectsPage={isProjectsPage} />
            <main>{children}</main>
            <Footer isProjectsPage={isProjectsPage} />
        </div>
    )
}

export default Layout;