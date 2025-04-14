import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import TitleText from '../components/components';
import AboutMe from '../components/components';
import MyGoals from '../components/components';

// importer la fonction ToogleTheme dans les parenthèses de Home
// ajouter le déclenchement de la fonction au clic sur le bouton

function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const target = document.getElementById(location.state.scrollTo);
            if (state) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const [showGoals, setShowGoals] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTrigger = 500; // ou un `ref` vers la section
            if (window.scrollY > scrollTrigger) {
                setShowGoals(true);
            } else {
                setShowGoals(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='home-page'>
            <section className='part-1'>
                <div className='part-1-left'>
                    <div className='title-container'>
                        <div className='main-title'>
                            <TitleText />
                        </div>
                        <p className='title-list'>Motivée • Créative • Sérieuse</p>
                        <p className='title-description-p'>
                            Je suis jeune, et encore débutante en développement Web mais pour le moins compétente.
                            Bien qu'ayant une préférence pour le backend, mon profil reste encore plutôt fullstack,
                            n'ayant pas encore eu l'opportunité de pleinement me spécialiser. C'est pourquoi, qu'il
                            s'agisse de visuels responsifs, de bases de données ou de logiques APIs, je suis prête
                            à vous aider dans le développement et la conception de votre site web.
                            N'hésitez pas me contacter pour plus d'information.
                        </p>
                    </div>

                    <div className='title-button'>
                        <button href='#' className='title-button-cv'>
                            Voir le CV
                        </button>
                        <button href='#' className='title-button-contact'>
                            Échangeons
                        </button>
                    </div>
                </div>

                <div className='part-1-right'>
                    <div className='light-mode'>
                        <i class="fa-solid fa-sun" style={{ color: 'white' }}></i>
                        <button className='button-ligh-mode'>
                            <div className='div-ligh-mode'></div>
                        </button>
                        <i class="fa-solid fa-moon" style={{ color: 'white' }}></i>
                    </div>
                </div>
            </section>


            <section className='part-2'>
                {showGoals ? <MyGoals /> : <AboutMe />}
            </section>


            <section className='part-3'>
                <h2>Mon parcours</h2>
                <div class="timeline">

                    <div class="contener-right">
                        <div class="content">
                            <h3>Université Jean Moulin</h3>
                            <p>Validation d'une licence de philosophie<br />
                                précédée d'une première année en Hypokhâgne</p>
                        </div>
                        <p className='date'>2021-2024</p>
                    </div>

                    <div class="container-left">
                        <div class="content">
                            <h3>Openclassrooms</h3>
                            <p>Formation "Développeur Web"<br />
                                délivrant un RNCP de niveau 2</p>
                        </div>
                        <p className='date'>2025</p>
                    </div>

                    <div class="container-right">
                        <div class="content">
                            <h3>My Digital School</h3>
                            <p>Dernière année en alternance de bachelor<br />
                                "Développeur web et mobile" (à venir)</p>
                        </div>
                        <p className='date'>2025-2026</p>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Home;

