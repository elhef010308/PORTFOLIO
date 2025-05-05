import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    const handleGoToProjects = () => {
        navigate('/projects');
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer>
            <div className='footer'>
                <div className='link-footer'>
                    <a className='link-to-github' href='https://github.com/elhef010308' target='_blank' rel='noopener noreferrer'>
                        <i className='fa-brands fa-github' id='icone-footer'></i>
                    </a>
                    <a className='link-to-linkedin' href='https://www.linkedin.com/in/lucy-fougerard-6a126632a/' target='_blank' rel='noopener noreferrer'>
                        <i className='fa-brands fa-linkedin-in' id='icone-footer'></i>
                    </a>
                </div>

                <div className='info-footer'>
                    <p className='p-footer-1'>Fougerard Lucy</p>
                    <p className='p-footer-2'>© Copyright 2025 • Tous droits réservés</p>
                </div>

                <div className='button-footer'>
                    <button className='link-to-certificates' onClick={handleGoToProjects}>
                        <i className='fa-solid fa-file-lines' id='icone-footer'></i>
                    </button>
                    <button className='link-to-top-page' onClick={handleScrollToTop}>
                        <i className='fa-solid fa-arrow-up' id='icone-footer'></i>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;