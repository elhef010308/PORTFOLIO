import cvImage from '../images/cv-image.png';
import { ProjectCard } from '../components/components.jsx';
import { CertificationCard } from '../components/components.jsx';
import { TitleCurriculum } from '../components/components.jsx';
import projectsDatas from '../assets/projects.json';
import certifications from '../assets/certifications.json';
import backgroundImageDark from '../images/background-image-cv-dark.png';

import { useState } from 'react';

function Cv() {
    const [selectedCertif, setSelectedCertif] = useState(null);
    // selectCertif va contenir un objet JSON
    // null veut dire "aucune modale n'est ouverte"

    return (
        <div className='cv-page'>
            <section className="part-cv-1">
                <div className="title-cv-container">
                    <div className="cv-title">
                        <TitleCurriculum />
                        <a href="#" download>Télécharger</a>
                    </div>
                </div>
            </section>

            <section className='part-cv-2'>
                <div className='openclassrooms'>
                    <h2>MON PARCOURS OPENCLASSROOMS (2025)</h2>
                    <div className='formation-title'>
                        <p className='formation-p'>Formation "Développeur Web"</p>
                        <a href='/programme-formation.pdf' download>
                            Voir le programme
                        </a>
                    </div>
                    <div className='projects-container'>
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


                    <p className='certification-p'>Certifications Openclassrooms</p>
                    <div className='certifications-wrapper'>
                        <div className='round left'></div>  {/* Rond gauche fixe */}
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

                <div className='university'>
                    <div className='university-title'>
                        <h2>MON PARCOURS UNIVERSITAIRE</h2>
                        <p className='formation'>Licence de Philosophie</p>
                    </div>

                    <div className='university-content'>
                        <h3 className='first-year'>2021-2022 : Première année d'Hypokhâgne<br /> (en école préparatoire)</h3>
                        <ul>
                            <li className='courses-university'>════════════════════► Histoire</li>
                            <li className='courses-university'>════════════════════► Géographie</li>
                            <li className='courses-university'>════════════════════► Français</li>
                            <li className='courses-university'>════════════════════► Littérature</li>
                            <li className='courses-university'>════════════════════► Latin (en LV2)</li>
                            <li className='courses-university'>════════════════════► Anglais et Espagnol (en LV3)</li>
                        </ul>

                        <h3 className='second-third-year'>2022-2023 : Deuxième année de licence Philosophie (en faculté)</h3>
                        <p className='semestry'>SEMESTRE 1</p>
                        <ul>
                            <li className='courses-university'>════════════════════► Esthétique</li>
                            <li className='courses-university'>════════════════════► Métaphysique</li>
                            <li className='courses-university'>════════════════════► Philosophie contemporaine</li>
                            <li className='courses-university'>════════════════════► Philosophie des sciences et épistémologiue</li>
                            <li className='courses-university'>════════════════════► Philosophie moderne</li>
                            <li className='courses-university'>════════════════════► Philosophie morale et politique</li>
                            <li className='courses-university'>════════════════════► Latin (en option)</li>
                            <li className='courses-university'>════════════════════► Anglais (en LV2) et Espagnol (en LV3)</li>
                        </ul>

                        <p className='semestry'>SEMESTRE 2</p>
                        <ul>
                            <li className='courses-university'>═══════════════════► Philosophie du droit</li>
                            <li className='courses-university'>════════════════════► Métaphysique</li>
                            <li className='courses-university'>════════════════════► Philosophie des sciences humaines et sociales</li>
                            <li className='courses-university'>════════════════════► Philosophie des sciences et épistémologiue</li>
                            <li className='courses-university'>════════════════════► Philosophie moderne</li>
                            <li className='courses-university'>════════════════════► Logique</li>
                            <li className='courses-university'>════════════════════► Latin (en option)</li>
                            <li className='courses-university'>════════════════════► Anglais (en LV2) et Espagnol (en LV3)</li>
                        </ul>

                        <h3 className='second-third-year'>2023-2024 : Troisième année de licence Philosophie (en faculté)</h3>
                        <p className='semestry'>SEMESTRE 1</p>
                        <ul>
                            <li className='courses-university'>════════════════════► Logique</li>
                            <li className='courses-university'>════════════════════► Métaphysique</li>
                            <li className='courses-university'>════════════════════► Philosophie moderne et contemporaine</li>
                            <li className='courses-university'>════════════════════► Philosophie des sciences et épistémologiue</li>
                            <li className='courses-university'>════════════════════► Philosophie morale et politique</li>
                            <li className='courses-university'>════════════════════► Philosophie ancienn</li>
                            <li className='courses-university'>════════════════════► Latin (en option)</li>
                            <li className='courses-university'>════════════════════► Anglais (en LV2) et Espagnol (en LV3)</li>
                        </ul>

                        <p className='semestry'>SEMESTRE 2</p>
                        <ul>
                            <li className='courses-university'>════════════════════► Logique</li>
                            <li className='courses-university'>════════════════════► Métaphysique</li>
                            <li className='courses-university'>════════════════════► Philosophie ancienne et médiévale</li>
                            <li className='courses-university'>════════════════════► Philosophie contemporaine</li>
                            <li className='courses-university'>════════════════════► Philosophie moderne et contemporaine</li>
                            <li className='courses-university'>════════════════════► Philosophie de l'art</li>
                            <li className='courses-university'>════════════════════► Philosophie des sciences et épistémologiue</li>
                            <li className='courses-university'>════════════════════► Philosophie politique</li>
                            <li className='courses-university'>════════════════════► Latin (en option)</li>
                            <li className='courses-university'>════════════════════► Anglais (en LV2) et Espagnol (en LV3)</li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* BOITE MODALE POUR AFFICHER LES CERTIFICATIONS */}
            {selectedCertif !== null && (
                <div className='modal-certifications' onClick={() => setSelectedCertif(null)}>
                    <div className='modale-image' onClick={(e) => e.stopPropagation()}>
                        <img src={selectedCertif.full} alt={selectedCertif.alt} />
                        <button onClick={() => setSelectedCertif(null)}>X</button>
                    </div>
                </div>
            )}
        </div >
    );
}

export default Cv;