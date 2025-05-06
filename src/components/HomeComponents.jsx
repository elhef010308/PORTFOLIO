import AnimatedTitle from './AnimatedTitle.jsx';


// COMPOSANT POUR LE TITRE PRINCIPAL DE LA PAGE D'ACCUEIL
export default function TitleText() {
    return <AnimatedTitle text={['Développeuse', 'web et mobile']} id="text" />;
};


// COMPOSANTS A PROPOS DE MOI
export function AboutMe() {
    return (
        <div className='home__about-container'>
            <div className='home__about-image'>
            </div>
            <div className='home__about-content'>
                <h2>
                    A propos de moi
                </h2>
                <p className='home__about-me'>
                    A 21 ans, je suis actuellement en reconversion pour travailler dans le domaine
                    du web. Après une licence de philosophie, où j'ai pu acquérir culture générale,
                    capacité de réflexion, et qualité rédactionnelle, j'ai entrepris une reconversion
                    au sein de l'organisme Openclassrooms. Actuellement en fin de formation "Développeur web",
                    j'envisage une 3ème année de bachelor "Développeur web et mobile" en alternance à la Digital
                    School de Lyon, pour acquérir de l'expérience avant de me lancer pleinement dans le monde
                    du travail.
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
