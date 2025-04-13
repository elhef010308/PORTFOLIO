import avatar from '../images/avatar.png';
import moon from '../images/moon.png';
import sun from '../images/sun.png';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// importer la fonction ToogleTheme dans les parenthèses de Home
// ajouter le déclenchement de la fonction au clic sur le bouton

function Home() {
    const location = useLocation();

    useEffect (() => {
        if (location.state?.scrollTo) {
            const target = document.getElementById(location.state.scrollTo);
            if (state) {
                target.scrollIntoView({ behavior: 'smooth'});
            }
        }
    }, [location]);

    return (
        <>
            <section className='part-1'>
                <div className='part-1-left'>
                    <div className='home-title'>
                        <p>Développeuse web<br />et mobile</p>
                    </div>

                    <div className='light-mode'>
                        <img className='sun' alt='icone soleil' src={sun} />
                        <button className='button-ligh-mode'>
                            <div></div>
                        </button>
                        <img className='moon' alt='icone soleil' src={moon} />
                    </div>
                </div>

                <div className='part-1-right'>
                    <div className='buble-1'></div>
                    <div className='buble-2'></div>
                    <div className='buble-3'></div>
                    <div className='buble-4'>
                        Niveau 1<br />"Hello World !"
                    </div>
                </div>
            </section>

            <section className='part-2'>
                <div className='part-2-left'>
                    <img className='avatar' alt='avatar de profil' src={avatar} />
                    <p className='name'>Lucy</p>
                    <a href='/files/CV-Lucy.pdf' download>VOIR CV</a>
                </div>
                <div className='part-2-right' id="about">
                    <div className='about-me'>
                        <h2>A propos de moi</h2>
                        <p className='text-description'>A 21 ans, je suis actuellement en reconversion pour travailler dans le domaine
                            du web. Après une licence de philosophie, où j'ai pu acquérir culture générale,
                            capacité de réflexion, et qualité rédactionnelle, j'ai entrepris une reconversion
                            au sein de l'organisme Openclassrooms. Actuellement en fin de formation "Développeur web",
                            j'envisage une 3ème année de bachelor "Développeur web et mobile" en alternance à la Digital
                            School de Lyon, pour acquérir de l'expérience avant de me lancer pleinement dans le monde
                            du travail.
                        </p>
                    </div>

                    <div className='goals'>
                        <h2>Mes objectifs</h2>
                        <ul>
                            <li className='check-case'></li>
                            <li className='check-case'></li>
                            <li className='check-case'></li>
                        </ul>
                    </div>
                </div>
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
        </>

    )
}

export default Home;

