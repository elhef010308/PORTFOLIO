import { useNavigate } from "react-router-dom";

function NoFound() {
    const navigate = useNavigate();

    return (
        <div className='error'>
            <p className='error__number'>404</p>
            <p className='error__message'>Oups! La page que vous demandez n'existe pas.</p>
            <p className='error__link' onClick={() => navigate("/")}>Retourner sur la page d’accueil</p>
        </div>
    )
}

export default NoFound;