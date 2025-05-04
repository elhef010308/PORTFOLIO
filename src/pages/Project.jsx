// page des projets (mes projets - portfolio)
// ajouter les compétences (Mes softskills)

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { ProjectsPage } from '../components/projects-components.jsx';
import { TitleProjectsPage } from '../components/projects-components.jsx';
import projectdetail from '../assets/project-details.json';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import data from '../assets/softskills.json';



function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedProject !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedProject]);

    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    return (
        <div className='projects-page'>
            <section className="part-projects-1">
                <TitleProjectsPage />
            </section>


            <section className="part-projects-2">
                <div className='box-projects-one'>
                    <h2 className='title-projects-cards'>Projets réalisés avec Openclassrooms</h2>
                    <div className='projects-carts-container'>
                        {projectdetail.map((project) => (
                            <ProjectsPage
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                src={project.src}
                                alt={project.alt}
                                description={project.description}
                                github={project.github}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </div>
                </div>

                <div className='softskills-container'>
                    {data.map((item) => (
                        <div key={item.id} className='softskills'>
                            <div className='logo-softskills'>
                                <img src={item.src} alt={item.alt} />
                            </div>
                            <p className='title-softskills'>{item.title}</p>
                            <div className="maitrise-softskills">
                                <div className={`jauge jauge-${item.id}`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* BOITE MODALE POUR AFFICHER LE DETAIL DES PROJETS */}
            {selectedProject !== null && (
                <div className='modal-projects-details' onClick={() => setSelectedProject(null)}>
                    <div className='modale-image' onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedProject.id} : {selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="github-link">
                            <FontAwesomeIcon icon={faSquareGithub} />
                        </a>
                        <button onClick={() => setSelectedProject(null)}>X</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects;



