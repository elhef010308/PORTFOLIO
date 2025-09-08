import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import TitleText from '../components/HomeComponents.jsx';
import { AboutMe, ModalHome } from '../components/HomeComponents.jsx';

function Home({ darkMode, toggleTheme }) {
    const location = useLocation();
    const navigate = useNavigate();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const hasSeenModal = sessionStorage.getItem('hasSeenModal');

        if (!hasSeenModal) {
            setModalIsOpen(true);
            sessionStorage.setItem('hasSeenModal', 'true');
        }
    }, []);

    const handleModalClose = () => {
        setModalIsOpen(false);
    };

    useEffect(() => {
        if (location.state?.scrollTo === 'about') {
            requestAnimationFrame(() => {
                setTimeout(() => {
                    const target = document.getElementById('about-me');
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                        navigate(location.pathname, { replace: true, state: {} });
                    }
                }, 0);
            });
        }
    }, [location]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='home'>

            <Helmet>
                <title>Page d'accueil - Portfolio</title>
                <meta name="description" content="Bienvenue sur la page d'accueil de mon premier portfolio de développeur..." />
            </Helmet>

            {modalIsOpen && <ModalHome onClose={handleModalClose} />}

            <section className='home__intro'>
                <div className='home__intro-title'>
                    <div className='home__title-container'>
                        <div className='home__title'>
                            <TitleText />
                        </div>
                        <p className='home__title-list'>Motivée &nbsp; • &nbsp; Créative &nbsp; • &nbsp; Sérieuse</p>
                        <p className='home__title-description'>
                            Je suis jeune, et encore débutante en développement Web mais pour le moins compétente.
                            Bien qu'ayant une préférence pour le backend, mon profil reste encore plutôt fullstack,
                            n'ayant pas encore eu l'opportunité de pleinement me spécialiser. C'est pourquoi, qu'il
                            s'agisse de visuels responsifs, de bases de données ou de logiques APIs, je suis prête
                            à vous aider dans le développement et la conception de votre site web.
                            N'hésitez pas me contacter pour plus d'information.
                        </p>
                    </div>

                    <div className='home__title-buttons'>
                        <Link aria-label='Lien vers la page CV' className='title__button-cv' to='/cv'>
                            Voir le CV
                        </Link>
                        <Link aria-label='Lien vers la page Contact' className='title__button-message' to='/contact'>
                            Échangeons
                        </Link>
                    </div>
                </div>

                <div className='home__intro-darkMode'>
                    <label className="home__darkMode-container">
                        <div className="home__darkMode-button">
                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={toggleTheme}
                                name="theme-mode"
                            />
                            <span className=" slider"></span>
                        </div>
                        <div className="label" style={{ color: 'var(--color-two)' }}>{darkMode ? "Dark mode" : "White mode"}</div>
                    </label>
                </div>
            </section>


            <section className='home__about' id='about-me'>
                <AboutMe />
            </section>


            <section className='home__school'>
                <h2>Mon parcours</h2>
                <div className="home__school-timeline ">
                    <div className="container-1">
                        <div className='home__school-content one'>
                            <div className='home__school__content-infos'>
                                <h3>Université Jean Moulin</h3>
                                <p>Validation d'une licence de philosophie
                                    précédée d'une première année en Hypokhâgne</p>
                            </div>
                            <p className='date-1'>2021-2024</p>
                        </div>
                    </div>

                    <div className="container-2">
                        <div className='home__school-content two'>
                            <p className='date-2'>2025</p>
                            <div className='home__school__content-infos'>
                                <h3>Openclassrooms</h3>
                                <p>Formation "Développeur Web"
                                    délivrant un RNCP de niveau 2</p>
                            </div>
                        </div>
                    </div>

                    <div className="container-3">
                        <div className='home__school-content three'>
                            <div className='home__school__content-infos'>
                                <h3>My Digital School</h3>
                                <p>Dernière année en alternance de bachelor
                                    "Développeur web et mobile" (à venir)</p>
                            </div>
                            <p className='date-3'>2025-2026</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Home;

