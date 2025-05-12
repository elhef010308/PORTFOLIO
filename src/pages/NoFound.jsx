import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';

function NoFound() {
    const navigate = useNavigate();

    return (
        <div className='error'>

            <Helmet>
                <title>Page d'erreur – Portfolio</title>
                <meta name="description" content="Page d'erreur : URL demandée inconnue..." />
            </Helmet>

            <p className='error__number'>404</p>
            <p className='error__message'>Oups! La page que vous demandez n'existe pas.</p>
            <p className='error__link' onClick={() => navigate("/")}>Retourner sur la page d’accueil</p>
        </div>
    )
}

export default NoFound;