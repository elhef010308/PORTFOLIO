import { ProjectCard, CertificationCard, TitleCurriculum } from '../components/CvComponents.jsx';

import projectsDatas from '../assets/projectsData.json';
import certifications from '../assets/certifications.json';

import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';


function Cv() {
    const [selectedCertif, setSelectedCertif] = useState(null);

    useEffect(() => {
        if (selectedCertif !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedCertif]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='cv'>

            <Helmet>
                <title>Page du CV – Portfolio</title>
                <meta name='description' content="Bienvenue sur ma page CV. Vous y trouverez en détails les formations que j'ai suivies, résumant ainsi mon parcours universitaire..." />
            </Helmet>

            <section className='cv__intro'>
                <div className='cv__intro__'>
                    <div className='cv__intro-title'>
                        <TitleCurriculum />
                        <a aria-label='Lien pour télécharger mon CV' href={`${import.meta.env.BASE_URL}files/cv.pdf`} download>Télécharger</a>
                    </div>
                </div>
            </section>

            <section className='cv__school'>
                <div className='cv__school__university-and-job'>
                    <div className='cv__school-university'>
                        <h2>MON PARCOURS ACADÉMIQUE</h2>
                        <p><span style={{ fontWeight: '900' }}>2022-2024 : </span>Université Jean Moulin (Lyon 3) <br /> ••• Validation d'une Licence de Philosophie</p>
                        <p><span style={{ fontWeight: '900' }}>2021-2022 : </span>Lycée Édouard Hérriot (Lyon 6) <br /> ••• Première année de prépa littéraire (Hypokhâgne)</p>
                        <p><span style={{ fontWeight: '900' }}>2021 : </span>Lycée Jérémie de la Rue (Charlieu) <br /> ••• Obtention du Bacalauréat avec options Maths et HGGSP</p>              
                    </div>
                    <div className='cv__school-jobs'>
                        <h2>MES EXPÉRIENCES PROFESSIONNELLES</h2>
                        <p>Service, ménage et plonge dans une auberge (depuis 2021)</p>
                        <p>Travail dans la commune de mon village : <br /> 
                            <span style={{ color: 'transparent' }}>.... ....</span>- Au service espaces verts <br />
                            <span style={{ color: 'transparent' }}>.... ....</span>- Au service administratif de la Mairie <br />
                            <span style={{ color: 'transparent' }}>.... ....</span>- Dans une résidance autonomie pour séniors </p>
                        <p>Représenations musicales lors de diverses manifestations</p>
                    </div>
                </div>

                <div className='cv__school-openclassrooms'>
                    <h2>MON PARCOURS OPENCLASSROOMS (2025)</h2>
                    <div className='cv__openclassrooms-title'>
                        <p>FORMATION "Développeur Web"</p>
                        <a aria-label='Lien pour télécharger le programme de la formation Openclassrooms Développeur Web' href={`${import.meta.env.BASE_URL}files/programme-openclassrooms.pdf`} download>
                            Voir le programme
                        </a>
                    </div>

                    <p className='cv__openclassrooms-justification'>
                        J’ai découvert le développement web pendant ma deuxième année de licence de philosophie, à un moment où je cherchais une voie plus concrète, technique et stimulante. 
                        J’ai commencé par apprendre le HTML et le CSS en autodidacte, en suivant des tutoriels en ligne, et j’ai tout de suite accroché à cette logique de création, 
                        mêlant rigueur et autonomie. Après avoir exploré plusieurs pistes et assisté à des salons étudiants, j’ai choisi la formation accélérée d’OpenClassrooms, parfaitement adaptée à mon rythme 
                        de travail et à ma capacité à apprendre de façon autonome. Cette réorientation n’a rien d’un hasard : c’est le résultat d’un cheminement construit, guidé par l’envie d’exercer un métier concret, 
                        évolutif et porteur de sens.
                    </p>

                    <p className='cv__openclassrooms-certifications'>Certifications Openclassrooms</p>
                    <div className='cv__certifications-wrapper'>
                        <div className='certifications-wrapper-round left'></div>  {/* Rond gauche fixe */}
                        
                        <div className='certifications-scroll'>
                            {certifications.map((certif) => (
                                <CertificationCard
                                    key={certif.id}
                                    src={`${import.meta.env.BASE_URL}${certif.preview}`}
                                    alt={certif.alt}
                                    onClick={() => setSelectedCertif(certif)}
                                />
                            ))}
                        </div>
                        
                        <div className="certifications-wrapper-round right"></div>  {/* Rond droit fixe */}
                    </div>

                    <p className='cv__openclassrooms-projects'>Projets Openclassrooms</p>
                    <div className='cv__openclassrooms-projects-infos'>
                        {projectsDatas.map((project) => (
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                objectives={project.objectives}
                            />
                        ))}
                    </div>
                </div>
            </section>


            {/* BOITE MODALE POUR AFFICHER LES CERTIFICATIONS */}
            {selectedCertif !== null && (
                <div className='cv-modal__container' onClick={() => setSelectedCertif(null)}>
                    <div className='cv-modal__content' onClick={(e) => e.stopPropagation()}>
                        <img aria-label='Image de ma certification obtenue' src={`${import.meta.env.BASE_URL}${selectedCertif.full}`} alt={selectedCertif.alt} />
                        <button aria-label='Bouton pour fermer la boite modale' onClick={() => setSelectedCertif(null)}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cv;