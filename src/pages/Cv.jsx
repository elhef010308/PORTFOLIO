import { ProjectCard, CertificationCard, TitleCurriculum } from '../components/CvComponents.jsx';

import projectsDatas from '../assets/projectsData.json';
import certifications from '../assets/certifications.json';



import { useState, useEffect } from 'react';

function Cv() {
    const [selectedCertif, setSelectedCertif] = useState(null);

    useEffect(() => {
        if (selectedCertif !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Clean-up au démontage
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedCertif]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='cv'>
            <section className="cv__intro">
                <div className="cv__intro__">
                    <div className="cv__intro-title">
                        <TitleCurriculum />
                        <a href='/files/cv.pdf' download>Télécharger</a>
                    </div>
                </div>
            </section>

            <section className='cv__school'>
                <div className='cv__school-openclassrooms'>
                    <h2>MON PARCOURS OPENCLASSROOMS (2025)</h2>
                    <div className='cv__openclassrooms-title'>
                        <p>Formation "Développeur Web"</p>
                        <a href='/files/programme-openclassrooms.pdf' download>
                            Voir le programme
                        </a>
                    </div>
                    <div className='cv__openclassrooms-projects'>
                        {projectsDatas.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                objectives={project.objectives}
                                isLeft={index % 2 === 0}
                            />
                        ))}
                    </div>


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
                </div>

                <div className='cv__school-university'>
                    <div className='cv__university-title'>
                        <h2>MON PARCOURS UNIVERSITAIRE</h2>
                        <p>Licence de Philosophie</p>
                    </div>

                    <div className='cv__university-years'>
                        <h3 className='university__first-year'>2021-2022 : Première année d'Hypokhâgne<br /> (en école préparatoire)</h3>
                        <ul>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Histoire</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Géographie</span></li>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Français</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Littérature</span></li>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Latin (en LV2)</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Anglais et Espagnol (en LV3)</span></li>
                        </ul>

                        <h3 className='university__second-year'>2022-2023 : Deuxième année de licence Philosophie (en faculté)</h3>
                        <p className='university__semestry'>SEMESTRE 1</p>
                        <ul>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Esthétique</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Métaphysique</span></li>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Philosophie contemporaine</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Philosophie des sciences et épistémologiue</span></li>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Philosophie moderne</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Philosophie morale et politique</span></li>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Latin (en option)</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Anglais (en LV2) et Espagnol (en LV3)</span></li>
                        </ul>

                        <p className='university__semestry'>SEMESTRE 2</p>
                        <ul>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Philosophie du droit</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Métaphysique</span></li>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Philosophie des sciences humaines et sociales</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Philosophie des sciences et épistémologiue</span></li>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Philosophie moderne</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Logique</span></li>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Latin (en option)</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Anglais (en LV2) et Espagnol (en LV3)</span></li>
                        </ul>

                        <h3 className='university__third-year'>2023-2024 : Troisième année de licence Philosophie (en faculté)</h3>
                        <p className='university__semestry'>SEMESTRE 1</p>
                        <ul>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Logique</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Métaphysique</span></li>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Philosophie moderne et contemporaine</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Philosophie des sciences et épistémologiue</span></li>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Philosophie morale et politique</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Philosophie ancienn</span></li>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Latin (en option)</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Anglais (en LV2) et Espagnol (en LV3)</span></li>
                        </ul>

                        <p className='university__semestry'>SEMESTRE 2</p>
                        <ul>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Logique</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Métaphysique</span></li>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Philosophie ancienne et médiévale</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Philosophie contemporaine</span></li>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Philosophie moderne et contemporaine</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Philosophie de l'art</span></li>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Philosophie des sciences et épistémologiue</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Philosophie politique</span></li>
                            <li className='university__courses-list'><span className='arrow-university-none'>════════════════════►</span> Latin (en option)</li>
                            <li className='university__courses-list'><span className='arrow-university'><span className='arrow-university-none'>════════════════════►</span> Anglais (en LV2) et Espagnol (en LV3)</span></li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* BOITE MODALE POUR AFFICHER LES CERTIFICATIONS */}
            {selectedCertif !== null && (
                <div className='cv-modal__container' onClick={() => setSelectedCertif(null)}>
                    <div className='cv-modal__content' onClick={(e) => e.stopPropagation()}>
                        <img src={`${import.meta.env.BASE_URL}${selectedCertif.full}`} alt={selectedCertif.alt} />
                        <button onClick={() => setSelectedCertif(null)}>X</button>
                    </div>
                </div>
            )}
        </div >
    );
}

export default Cv;