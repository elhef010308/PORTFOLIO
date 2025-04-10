import avatar from '../images/avatar';
import moon from '../images/moon';
import sun from '../images/sun';
import frenshFlag from '../images/frensh-flag';
import englishFlag from '../images/english-flag';
import computer from '../images/computer';

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
                            <img alt='avatar de profil' src={avatar} />
                            <p>Lucy</p>
                        </div>
                        <div>
                            <div className='dark-mode'>
                                <img className='sun' alt='icone soleil' src={sun} />
                                <button>
                                    <div></div>
                                </button>
                                <img className='moon' alt='icone soleil' src={moon} />
                            </div>
                            <p>"Hello World !"</p>
                        </div>
                    </div>

                    <div className='right'>
                        <div>
                            <div>
                                <img alt='drapeau français' src={frenshFlag} />
                                <img alt='drapeau anglais' src={englishFlag} />
                            </div>
                            <div>
                                <button></button>
                                <button></button>
                            </div>
                            <p>Creatum mense Aprili anno MMXXV</p>
                        </div>

                        <h1>Développeuse<br />web et mobile</h1>
                    </div>
                </div>

                {/* 👉 Le SVG est ici, tout en bas de part-1 : position absolute + z-index(-2) */}
                <div className='wave-svg'></div>
            </section>

            <section className='part-2'>
                <div>
                    <a href='/files/CV-Lucy.pdf' download>VOIR CV</a>
                    <img alt='icone d ordinateur' src={computer} />
                </div>
                <div>
                    <h2>A propos de moi</h2>
                    <p></p>

                    <h2>Objectifs</h2>
                    <p></p>
                </div>
            </section>
        </>

    )
}

/* A réfélchir : envisager un epage dédiée au CV et un bouton 
de téléchargement seulement sur cette page.
Ici la balise A pourrait renvoyer vers la fameuse page... ?? a voir */