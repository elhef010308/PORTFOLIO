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
                    <h2>MON PARCOURS UNIVERSITAIRE</h2>
                    <p className='formation'>Licence de Philosophie</p>
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