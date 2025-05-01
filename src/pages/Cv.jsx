import cvImage from '../images/cv-image.png';
import { ProjectCard } from '../components/components.jsx';
import { CertificationCard } from '../components/components.jsx';
import { TitleCurriculum } from '../components/components.jsx';
import projectsDatas from '../assets/projects.json';
import certifications from '../assets/certifications.json';

import { useState } from 'react';

function Cv() {
    const [selectedCertif, setSelectedCertif] = useState(null);
    // selectCertif va contenir un objet JSON
    // null veut dire "aucune modale n'est ouverte"

    return (
        <div className='cv-page'>
            <section className='part-cv-1'>
                <div className='title-cv-container'>
                    <div className='cv-title'>
                        <TitleCurriculum />
                        <a href="#" download>Télécharger</a>
                    </div>
                    <div className="cv-image">
                        <img
                            alt="cv"
                            src={cvImage}
                        />
                    </div>
                </div>
            </section >

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
                            <li>════════════════════► Histoire</li>
                            <li>════════════════════► Géographie</li>
                            <li>════════════════════► Français</li>
                            <li>════════════════════► Littérature</li>
                            <li>════════════════════► Latin (en LV2)</li>
                            <li>════════════════════► Anglais et Espagnol (en LV3)</li>
                        </ul>

                        <h3 className='second-third-year'>2022-2023 : Deuxième année de licence Philosophie (en faculté)</h3>
                        <p className='semestry'>SEMESTRE 1</p>
                        <ul>
                            <li>════════════════════► Esthétique</li>
                            <li>════════════════════► Métaphysique</li>
                            <li>════════════════════► Philosophie contemporaine</li>
                            <li>════════════════════► Philosophie des sciences et épistémologiue</li>
                            <li>════════════════════► Philosophie moderne</li>
                            <li>════════════════════► Philosophie morale et politique</li>
                            <li>════════════════════► Latin (en option)</li>
                            <li>════════════════════► Anglais (en LV2) et Espagnol (en LV3)</li>
                        </ul>

                        <p className='semestry'>SEMESTRE 2</p>
                        <ul>
                            <li>════════════════════► Philosophie du droit</li>
                            <li>════════════════════► Métaphysique</li>
                            <li>════════════════════► Philosophie des sciences humaines et sociales</li>
                            <li>════════════════════► Philosophie des sciences et épistémologiue</li>
                            <li>════════════════════► Philosophie moderne</li>
                            <li>════════════════════► Logique</li>
                            <li>════════════════════► Latin (en option)</li>
                            <li>════════════════════► Anglais (en LV2) et Espagnol (en LV3)</li>
                        </ul>

                        <h3 className='second-third-year'>2023-2024 : Troisième année de licence Philosophie (en faculté)</h3>
                        <p className='semestry'>SEMESTRE 1</p>
                        <ul>
                            <li>════════════════════► Logique</li>
                            <li>════════════════════► Métaphysique</li>
                            <li>════════════════════► Philosophie moderne et contemporaine</li>
                            <li>════════════════════► Philosophie des sciences et épistémologiue</li>
                            <li>════════════════════► Philosophie morale et politique</li>
                            <li>════════════════════► Philosophie ancienn</li>
                            <li>════════════════════► Latin (en option)</li>
                            <li>════════════════════► Anglais (en LV2) et Espagnol (en LV3)</li>
                        </ul>

                        <p className='semestry'>SEMESTRE 2</p>
                        <ul>
                            <li>════════════════════► Logique</li>
                            <li>════════════════════► Métaphysique</li>
                            <li>════════════════════► Philosophie ancienne et médiévale</li>
                            <li>════════════════════► Philosophie contemporaine</li>
                            <li>════════════════════► Philosophie moderne et contemporaine</li>
                            <li>════════════════════► Philosophie de l'art</li>
                            <li>════════════════════► Philosophie des sciences et épistémologiue</li>
                            <li>════════════════════► Philosophie politique</li>
                            <li>════════════════════► Latin (en option)</li>
                            <li>════════════════════► Anglais (en LV2) et Espagnol (en LV3)</li>
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