import AnimatedTitle from './AnimatedTitle.jsx';
import { useState, useEffect } from 'react';

// MODALE AFFICHÉE A L'OUVERTURE DU PORTFOLIO
export function ModalHome({ onClose }) {
    useEffect(() => {
        // Bloquer le scroll
        document.body.style.overflow = 'hidden';

        // Nettoyage quand la modale est fermée
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className='home-first-modal__container'>
            <div className='home-first-modal__content'>
                <h2 className='home-first-modal__title'>Saurez-vous trouver la clé ?</h2>
                <p className='home-first-modal__text'>
                    Bienvenu à tous à l'intérieur de mon portfolio... <br /><br />
                    Mais laissez moi vous prévenir, il renferme un secret ! Une page invisible, soigneusement dissimulée à ceux qui ne feraient que passer. <br /><br />
                    Pour y accéder, il vous faudra chercher. Alors observez, soyez curieux, regardez jusqu'à trouver la clé qui, peut-être, vous laissera entrer.
                    Restez attentifs au moindre détail, parce que de l'autre côté, une autre énigme pourrait bien vous attendre, si vous veniez à vous tromper... <br /><br />
                    A vous de JOUER !
                </p>
                <button type='button' className="home-first-modal__close-button" onClick={onClose}>Fermer</button>
            </div>
        </div>
    )
}

// COMPOSANT POUR LE TITRE PRINCIPAL DE LA PAGE D'ACCUEIL
export default function TitleText() {
    return <AnimatedTitle text={['Développeuse', 'web et mobile']} id="text" />;
};


// COMPOSANTS A PROPOS DE MOI
export function AboutMe() {

    const musicImages = [
        'images/webP/image-profil_1.webp',
        'images/webP/image-profil_2.webp',
        'images/webP/image-profil_3.webp',
        'images/webP/image-profil_4.webp',
        'images/webP/image-profil_5.webp'
    ];

    const devImages = [
        'images/webP/carousel-profil_1.webp',
        'images/webP/carousel-profil_2.webp',
        'images/webP/carousel-profil_3.webp',
        'images/webP/carousel-profil_4.webp',
        'images/webP/carousel-profil_5.webp',
        'images/webP/carousel-profil_6.webp',
        'images/webP/carousel-profil_7.webp'
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % Math.max(musicImages.length, devImages.length));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const musicImage = musicImages[index % musicImages.length];
    const devImage = devImages[index % devImages.length];

    return (
        <div className='home__about-container'>
            <div className='home__about-image'>
                <img className='pictures_profil_music'
                    src={`${import.meta.env.BASE_URL}${musicImage}`}
                    alt='Photos de profils'
                    aria-label='Photos de profil'
                />
                <img className='pictures_profil_dev'
                    src={`${import.meta.env.BASE_URL}${devImage}`}
                    alt='Photos de profils'
                    aria-label='Photos de profil'
                />
            </div>
            <div className='home__about-content'>
                <h2>
                    A propos de moi
                </h2>
                <p className='home__about-me'>
                    À 21 ans, je suis actuellement en reconversion professionnelle dans le domaine du développement web.
                    Après une licence de philosophie, qui m’a permis de développer une solide culture générale, une rigueur
                    de réflexion et des qualités rédactionnelles, j’ai choisi de me tourner vers un domaine qui me
                    passionne : la programmation. <br /><br />

                    Parallèlement à ce parcours, je nourris une passion de longue date pour la musique, qui occupe une place
                    importante dans ma vie. Elle m’a appris la persévérance, l’écoute, et le goût du travail créatif —
                    des qualités que je retrouve pleinement dans le développement web. <br /><br />

                    Actuellement en fin de formation “Développeur web” avec OpenClassrooms, je souhaite poursuivre sur
                    une troisième année de bachelor “Développeur web et mobile” en alternance à la Digital School de Lyon.
                    Mon objectif : enrichir mon expérience en entreprise avant de me lancer pleinement dans le monde professionnel.
                </p>
                <h2>
                    Mes objectifs
                </h2>
                <ul className='home__about-goals'>
                    <li>Approfondir ma maîtrise du React</li>
                    <li>Monter en compétences en logique Javascript</li>
                    <li>Approfondir ma maîtrise du Node.js</li>
                    <li>Appronfondir mes connaissances en tests, débogages et référencement SEO</li>
                    <li>Me familiariser davantage avec la méthode agile/Scrum</li>
                    <li>Découvrir le MySQL (à titre de culture générale)</li>
                </ul>
            </div>
        </div>
    )
}
