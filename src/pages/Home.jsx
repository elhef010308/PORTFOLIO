import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import TitleText from '../components/components';
import { AboutMe, MyGoals } from '../components/components';


// importer la fonction ToogleTheme dans les parenthèses de Home
// ajouter le déclenchement de la fonction au clic sur le bouton

function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const target = document.getElementById(location.state.scrollTo);
            if (target) {
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

    // Mode clair - Mode sombre
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('mode');
        if (savedMode === 'mode-dark') {
            setDarkMode(true);
            document.body.classList.add('mode-dark');
            document.body.classList.remove('mode-white');
        } else {
            setDarkMode(false);
            document.body.classList.add('mode-white');
            document.body.classList.remove('mode-dark');
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);

        const classToAdd = newMode ? 'mode-dark' : 'mode-white';
        const classToRemove = newMode ? 'mode-white' : 'mode-dark';

        document.body.classList.replace(classToRemove, classToAdd);
        localStorage.setItem('mode', classToAdd);
    };

    return (
        <div className='home-page'>
            <section className='part-1'>
                <div className='part-1-left'>
                    <div className='title-container'>
                        <div className='main-title'>
                            <TitleText />
                        </div>
                        <p className='title-list'>Motivée &nbsp; • &nbsp; Créative &nbsp; • &nbsp; Sérieuse</p>
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
                        <button className='title-button-cv'>
                            Voir le CV
                        </button>
                        <button className='title-button-contact'>
                            Échangeons
                        </button>
                    </div>
                </div>

                <div className='part-1-right'>
                    <label className="btToggle">
                        <div className="btn">
                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={toggleTheme}
                                name="theme-mode"
                            />
                            <span className="slider"></span>
                        </div>
                        <div className="label" style={{color: 'white'}}>{darkMode ? "Dark mode" : "White mode"}</div>
                    </label>
                </div>
            </section>


            <section className='part-2'>
                {showGoals ? <MyGoals /> : <AboutMe />}
            </section>


            <section className='part-3'>
                <h2>Mon parcours</h2>
                <div className="timeline">

                    <div className="container-right">
                        <div className="content">
                            <h3>Université Jean Moulin</h3>
                            <p>Validation d'une licence de philosophie<br />
                                précédée d'une première année en Hypokhâgne</p>
                        </div>
                        <p className='date'>2021-2024</p>
                    </div>

                    <div className="container-left">
                        <div className="content">
                            <h3>Openclassrooms</h3>
                            <p>Formation "Développeur Web"<br />
                                délivrant un RNCP de niveau 2</p>
                        </div>
                        <p className='date'>2025</p>
                    </div>

                    <div className="container-right">
                        <div className="content">
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

