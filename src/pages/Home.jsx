import avatar from '../images/avatar.png';
import moon from '../images/moon.png';
import sun from '../images/sun.png';
import frenshFlag from '../images/frensh-flag.png';
import englishFlag from '../images/english-flag.png';
import computer from '../images/computer.png';

// importer la fonction ToogleTheme dans les parenthèses de Home
// ajouter le déclenchement de la fonction au clic sur le bouton

// importer aussi la fonction setLanguage au clic sur les boutons
// fonction appelée deux fois avec deux valeurs différentes ('fr' et 'en')

function Home() {
    return (
        <>
            <section className='part-1'>
                <div>
                    <div className='left'>
                        <div>
                            <img className='avatar' alt='avatar de profil' src={avatar} />
                            <p className='name'>Lucy</p>
                        </div>
                        <div>
                            <div className='dark-mode'>
                                <img className='sun' alt='icone soleil' src={sun} />
                                <button>
                                    <div></div>
                                </button>
                                <img className='moon' alt='icone soleil' src={moon} />
                            </div>
                            <p className='hello-world'>"Hello World !"</p>
                        </div>
                    </div>

                    <div className='right'>
                        <div>
                            <div>
                                <img className='flag1' alt='drapeau français' src={frenshFlag} />
                                <img className='flag2' alt='drapeau anglais' src={englishFlag} />
                            </div>
                            <div>
                                <button className='button-frensh'></button>
                                <button className='button-english'></button>
                            </div>
                            <p className='date'>Creatum mense Aprili anno MMXXV</p>
                        </div>

                        <h1>Développeuse<br />web et mobile</h1>
                    </div>
                </div>
                <div className='wave-svg1'></div>
                <div className='packman'>
                    <div class="container">
                        <div class="pacman"></div>
                        <div class="path"></div>
                        <div class="path"></div>
                        <div class="path"></div>
                        <div class="path"></div>
                        <div class="path"></div>
                        <div class="path"></div>
                        <div class="path"></div>
                        <div class="path"></div>
                    </div>
                </div>
                <svg viewBox="0 0 1440 150" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="svg-top">
                    <path fill="#0b0b0b" d="M0,50 C 200,20 400,20 600,40 C 800,70 1000,130 1200,100 C 1300,85 1400,65 1440,50 L1440,0 L0,0 Z" />
                </svg>
            </section>

            <div className='packman'>
                <div class="container">
                    <div class="pacman"></div>
                    <div class="path"></div>
                    <div class="path"></div>
                    <div class="path"></div>
                    <div class="path"></div>
                    <div class="path"></div>
                    <div class="path"></div>
                    <div class="path"></div>
                    <div class="path"></div>
                </div>
            </div>

            <section className='part-2'>
                <div>
                    <a href='/files/CV-Lucy.pdf' download>VOIR CV</a>
                    <img alt='icone d ordinateur' src={computer} />
                </div>
                <div>
                    <p className='part-intro'>Présentation</p>
                    <h2>A propos de moi</h2>
                    <ul>
                        <li>Créative</li>
                        <li>Motivée</li>
                        <li>Sérieuse</li>
                    </ul>
                    <p className='text-description'>A 21 ans, je suis actuellement en reconversion pour travailler dans le domaine
                        du web. Après une licence de philosophie, où j'ai pu acquérir culture générale,
                        capacité de réflexion, et qualité rédactionnelle, j'ai entrepris une reconversion
                        au sein de l'organisme Openclassrooms. Actuellement en fin de formation "Développeur web",
                        j'envisage une 3ème année de bachelor "Développeur web et mobile" en alternance à la Digital
                        School de Lyon, pour acquérir de l'expérience avant de me lancer pleinement dans le monde
                        du travail.
                    </p>

                    <h2>Mes objectifs</h2>
                    <p>Monter en compétences • Développer un projet de A à Z<br />
                        Acquérir de l'expérience en développement backend</p>
                </div>
            </section>

            <section className='part-3'>

            </section>
        </>

    )
}

export default Home;

// pour la section parcours (Mes expériences)


/* A réfélchir : envisager un epage dédiée au CV et un bouton 
de téléchargement seulement sur cette page.
Ici la balise A pourrait renvoyer vers la fameuse page... ?? a voir */