import { useNavigate } from "react-router-dom";

function NoFound() {
    const navigate = useNavigate();

    return (
        <div className="error-page">
            <p className='number-error'>404</p>
            <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
            <p className="error-redirection" onClick={() => navigate("/")}>Retourner sur la page d’accueil</p>
        </div>
    )
}

export default NoFound;