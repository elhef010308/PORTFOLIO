import { useNavigate, useLocation } from 'react-router-dom';


// créer une fonction pour remonter en haut de la page
// activer cette fonction via ONCLICK dans le bouton

function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoToCertificates = () => {
        if (location.pathname == ! '/cv') {
            navigate('/cv', { state: { scrollTo: 'certificates' } });
        } else {
            const aboutSection = document.getEelementById('certificates');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

    };

    return (
        <footer>
            <div className='footer'>
                <div className='link-footer'>
                    <a className='link-to-github' href='' target='_blank' rel='noopener noreferrer'>
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a className='link-to-linkedin' href='' target='_blank' rel='noopener noreferrer'>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>

                <div className='info-footer'>
                    <p className='p-footer-1'>Fougerard Lucy</p>
                    <p className='p-footer-2'>© Copyright 2025 • Tous droits réservés</p>
                </div>

                <div className='button-footer'>
                    <button className='link-to-certificates' onClick={handleGoToCertificates}>
                        <i class="fa-light fa-file-certificate"></i>
                    </button>
                    <button className='link-to-top-page'>
                        <i class="fa-solid fa-arrow-up"></i>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;