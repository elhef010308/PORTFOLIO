import AnimatedTitle from './AnimatedTitle.jsx';


// COMPOSANT POUR LE TITRE PRINCIPAL DE LA PAGE D'ACCUEIL
export default function TitleText() {
    return <AnimatedTitle text={['Développeuse', 'web et mobile']} id="text" />;
};


// COMPOSANTS A PROPOS DE MOI
export function AboutMe() {
    return (
        <div className='about-me-component'>
            <div className='about-me-img'>
            </div>
            <div className='about-me'>
                <h2 className='about-me-title'>
                    A propos de moi
                </h2>
                <p className='about-me-txt'>
                    A 21 ans, je suis actuellement en reconversion pour travailler dans le domaine
                    du web. Après une licence de philosophie, où j'ai pu acquérir culture générale,
                    capacité de réflexion, et qualité rédactionnelle, j'ai entrepris une reconversion
                    au sein de l'organisme Openclassrooms. Actuellement en fin de formation "Développeur web",
                    j'envisage une 3ème année de bachelor "Développeur web et mobile" en alternance à la Digital
                    School de Lyon, pour acquérir de l'expérience avant de me lancer pleinement dans le monde
                    du travail.
                </p>
                <h2 className='my-goals-title'>
                    Mes objectifs
                </h2>
                <ul className='my-goals-list'>
                    <li className='li-1'>Approfondir ma maîtrise du React</li>
                    <li className='li-2'>Monter en compétences en logique Javascript</li>
                    <li className='li-3'>Approfondir ma maîtrise du Node.js</li>
                    <li className='li-4'>Appronfondir mes connaissances en tests, débogages et référencement SEO</li>
                    <li className='li-5'>Me familiariser davantage avec la méthode agile/Scrum</li>
                    <li className='li-6'>Découvrir le MySQL (à titre de culture générale)</li>
                </ul>
            </div>
        </div>
    )
}
