import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

import { ProjectsPage } from '../components/ProjectComponents.jsx';
import { TitleProjectsPage } from '../components/ProjectComponents.jsx';

import projectdetail from '../assets/projects-details.json';
import data from '../assets/softskills.json';

import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';



function Projects() {
    const locationS = useLocation();
    const incomingProjectId = locationS.state?.projectId;

    // Trouve l'index du projet à afficher en premier (si transmis depuis la page CV)
    const initialIndex = incomingProjectId
        ? projectdetail.findIndex(p => p.id === `PROJET ${incomingProjectId}`)
        : 0;

    const [selectedProject, setSelectedProject] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const total = projectdetail.length;

    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    const visibleProjects = [
        projectdetail[prevIndex],
        projectdetail[currentIndex],
        projectdetail[nextIndex]
    ];

    const partProjects2Ref = useRef(null);

    // Scroll vers la section du carrousel si projetId est fourni
    useEffect(() => {
        if (incomingProjectId && partProjects2Ref.current) {
            setTimeout(() => {
                partProjects2Ref.current.scrollIntoView({ behavior: 'smooth' });
            }, 300); // petit délai pour que la page ait le temps de s'afficher
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [incomingProjectId]);

    const locations = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [locations]);

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


            <section className="part-projects-2" ref={partProjects2Ref}>
                <h2 className='title-projects-content'>Mes projets Openclassrooms</h2>
                <div className='box-projects-one'>
                    <button className='carousel-button left' onClick={() => setCurrentIndex(prev => (prev - 1 + total) % total)}>←</button>
                    <div className='projects-carts-container'>
                        {visibleProjects.map((project, i) => (
                            <ProjectsPage
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                src={project.src}
                                alt={project.alt}
                                description={project.description}
                                github={project.github}
                                onClick={() => setSelectedProject(project)}
                                size={i === 1 ? 'center' : 'side'}
                            />
                        ))}
                    </div>
                    <button className='carousel-button right' onClick={() => setCurrentIndex(prev => (prev + 1) % total)}>→</button>
                </div>
            </section>

            <section className="part-projects-3">
                <div className='softskills-container'>
                    <h2 className='title-softkills-content'>Niveau de compétence</h2>
                    {data.map((item) => (
                        <div key={item.id} className='softskills'>
                            <div className='logo-softskills'>
                                {item.src && (
                                    <img src={item.src} alt={item.alt || item.title} />
                                )}
                            </div>
                            <p className='title-softskills'>{item.title}</p>
                            <div className="maitrise-softskills">
                                <div className="jauge" style={{ width: item.level }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* BOITE MODALE POUR AFFICHER LE DETAIL DES PROJETS */}
            {
                selectedProject !== null && (
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
                )
            }
        </div >
    )
}

export default Projects;



