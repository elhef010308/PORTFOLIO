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
                                    src={certif.preview}
                                    alt={certif.alt}
                                    onClick={() => setSelectedCertif(certif)}
                                />
                            ))}
                        </div>
                        <div className="round right"></div>  {/* Rond droit fixe */}
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
                            <li className='university__courses-list'>════════════════════► Histoire</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Géographie</span></li>
                            <li className='university__courses-list'>════════════════════► Français</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Littérature</span></li>
                            <li className='university__courses-list'>════════════════════► Latin (en LV2)</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Anglais et Espagnol (en LV3)</span></li>
                        </ul>

                        <h3 className='university__second-year'>2022-2023 : Deuxième année de licence Philosophie (en faculté)</h3>
                        <p className='university__semestry'>SEMESTRE 1</p>
                        <ul>
                            <li className='university__courses-list'>════════════════════► Esthétique</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Métaphysique</span></li>
                            <li className='university__courses-list'>════════════════════► Philosophie contemporaine</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Philosophie des sciences et épistémologiue</span></li>
                            <li className='university__courses-list'>════════════════════► Philosophie moderne</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Philosophie morale et politique</span></li>
                            <li className='university__courses-list'>════════════════════► Latin (en option)</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Anglais (en LV2) et Espagnol (en LV3)</span></li>
                        </ul>

                        <p className='university__semestry'>SEMESTRE 2</p>
                        <ul>
                            <li className='university__courses-list'>════════════════════► Philosophie du droit</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Métaphysique</span></li>
                            <li className='university__courses-list'>════════════════════► Philosophie des sciences humaines et sociales</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Philosophie des sciences et épistémologiue</span></li>
                            <li className='university__courses-list'>════════════════════► Philosophie moderne</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Logique</span></li>
                            <li className='university__courses-list'>════════════════════► Latin (en option)</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Anglais (en LV2) et Espagnol (en LV3)</span></li>
                        </ul>

                        <h3 className='university__third-year'>2023-2024 : Troisième année de licence Philosophie (en faculté)</h3>
                        <p className='university__semestry'>SEMESTRE 1</p>
                        <ul>
                            <li className='university__courses-list'>════════════════════► Logique</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Métaphysique</span></li>
                            <li className='university__courses-list'>════════════════════► Philosophie moderne et contemporaine</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Philosophie des sciences et épistémologiue</span></li>
                            <li className='university__courses-list'>════════════════════► Philosophie morale et politique</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Philosophie ancienn</span></li>
                            <li className='university__courses-list'>════════════════════► Latin (en option)</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Anglais (en LV2) et Espagnol (en LV3)</span></li>
                        </ul>

                        <p className='university__semestry'>SEMESTRE 2</p>
                        <ul>
                            <li className='university__courses-list'>════════════════════► Logique</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Métaphysique</span></li>
                            <li className='university__courses-list'>════════════════════► Philosophie ancienne et médiévale</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Philosophie contemporaine</span></li>
                            <li className='university__courses-list'>════════════════════► Philosophie moderne et contemporaine</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Philosophie de l'art</span></li>
                            <li className='university__courses-list'>════════════════════► Philosophie des sciences et épistémologiue</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Philosophie politique</span></li>
                            <li className='university__courses-list'>════════════════════► Latin (en option)</li>
                            <li className='university__courses-list'><span className='arrow-university'>════════════════════► Anglais (en LV2) et Espagnol (en LV3)</span></li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* BOITE MODALE POUR AFFICHER LES CERTIFICATIONS */}
            {selectedCertif !== null && (
                <div className='cv-modal__container' onClick={() => setSelectedCertif(null)}>
                    <div className='cv-modal__content' onClick={(e) => e.stopPropagation()}>
                        <img src={selectedCertif.full} alt={selectedCertif.alt} />
                        <button onClick={() => setSelectedCertif(null)}>X</button>
                    </div>
                </div>
            )}
        </div >
    );
}

export default Cv;