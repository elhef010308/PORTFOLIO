import { useEffect } from 'react';


// COMPOSANT POUR LE TITRE PRINCIPAL DE LA PAGE D'ACCUEIL
export default function TitleText() {
    const text = ['Développeuse', 'web et mobile'];

    const createLetterArray = (array) => {
        return array.map(line => line.split(''));
    };

    const createLetterLayers = (array) => {
        return array.map(line => {
            return line.map((letter) => {
                let layer = '';
                for (let i = 1; i <= 2; i++) {
                    if (letter === ' ') {
                        layer += `<span class="space">&nbsp;</span>`;
                    } else {
                        layer += `<span class="letter-${i}">${letter}</span>`;
                    }
                }
                return layer;
            });
        });
    };

    const createLetterContainers = (array) => {
        return array.map(line => {
            return `<div class="line">${line.map(letter => `<div class="wrapper">${letter}</div>`).join('')}</div>`;
        });
    };

    useEffect(() => {
        const outputLayers = new Promise(function (resolve) {
            document.getElementById('text').innerHTML = createLetterContainers(
                createLetterLayers(createLetterArray(text))
            ).join('');
            resolve();
        });

        const spans = Array.prototype.slice.call(document.getElementsByTagName('span'));
        outputLayers
            .then(() => {
                spans.map((span) => {
                    setTimeout(() => {
                        span.parentElement.style.width = span.offsetWidth + 'px';
                        span.parentElement.style.height = span.offsetHeight + 'px';
                    }, 250);
                });
            })
            .then(() => {
                let time = 250;
                spans.map((span) => {
                    time += 75;
                    setTimeout(() => {
                        span.parentElement.style.top = '0px';
                    }, time);
                });
            });
    }, []);

    return (
        <div id="text">
        </div>
    )
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
                    <li className='li-1'>Apprendre le PHP et le MySQL</li>
                    <li className='li-2'>Reprendre l'apprentissage du Python</li>
                    <li className='li-3'>Appronfondir mes connaissances en tests et débogages</li>
                    <li className='li-4'>Me familiariser davantage avec la méthode agile/Scrum</li>
                    <li className='li-5'>Monter en compétences sur les fonctions en JS</li>
                    <li className='li-6'>Construire un projet de A à Z</li>
                </ul>
            </div>
        </div>
    )
}

