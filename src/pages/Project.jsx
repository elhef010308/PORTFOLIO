import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

import { ProjectsPage, TitleProjectsPage } from '../components/ProjectComponents.jsx';

import projectsDatas from '../assets/projectsData.json';
import data from '../assets/softskills.json';

import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';



function Projects() {
    const [showMore, setShowMore] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const location = useLocation();
    const { pathname, state } = location;
    const incomingProjectId = state?.projectId;

    const navigate = useNavigate();

    // Trouve l'index du projet à afficher en premier (si transmis depuis la page CV)
    const initialIndex = incomingProjectId
        ? projectsDatas.findIndex(p => p.id === incomingProjectId)
        : 0;

    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const total = projectsDatas.length;

    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    const visibleProjects = [
        projectsDatas[prevIndex],
        projectsDatas[currentIndex],
        projectsDatas[nextIndex]
    ];

    const partProjects2Ref = useRef(null);

    // Scroll vers la section du carrousel si projetId est fourni
    useEffect(() => {
        if (incomingProjectId && partProjects2Ref.current) {
            const t = setTimeout(() => {
                partProjects2Ref.current.scrollIntoView({ behavior: 'smooth' });
            }, 300);
            return () => clearTimeout(t);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [incomingProjectId]);

    // ---- Scroll en haut UNIQUEMENT quand l’URL change réellement
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    // ---- Empêche le scroll de fond quand un projet est ouvert en modal
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

    // ---- Handlers flèches (sécurisés)
    const goPrev = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + total) % total);
    };

    const goNext = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % total);
    };

    return (
        <div className='projects'>

            <Helmet>
                <title>Page des projets – Portfolio</title>
                <meta name="description" content="Bienvenue sur ma page des projets. Vous y trouverez en détails les projets réalisés au cours de ma formation Openclassrooms, et le niveau des softkills acquises..." />
            </Helmet>

            <section className="projects__intro">
                <TitleProjectsPage />
            </section>

            <section className="projects__carousel" ref={partProjects2Ref}>
                <h2 className='projects__carousel-title'>Mes projets Openclassrooms</h2>

                <div className='projects__carousel-wrapper'>
                    <button type='button' aria-label='Bouton de navigation à gauche dans le carrousel' className='projects__carousel-button left' onClick={goPrev}>←</button>

                    <div className='projects__cards-container'>
                        {visibleProjects.map((project, i) => (
                            <ProjectsPage
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                src={project.src.map((img) => `${import.meta.env.BASE_URL}${img}`)}
                                alt={project.alt}
                                description={project.description}
                                github={project.github}
                                onClick={() => setSelectedProject(project)}
                                size={i === 1 ? 'center' : 'side'}
                            />
                        ))}
                    </div>
                    <button type='button' aria-label='Bouton de navigation à droite dans le carrousel' className='projects__carousel-button right' onClick={goNext}>→</button>
                </div>
            </section>

            <section className="projects__skills">
                <div className='projects__skills-container'>
                    <h2 className='projects__skills-title'>Niveau de compétences</h2>

                    <div className='projects__skills-content'>
                        {data
                            .filter(item => item.enabled !== false)
                            .map((item) => (
                                <div key={item.id} className='projects-skills__list'>
                                    <div className='projects-skills__images'>
                                        {item.src && (
                                            <img aria-label='Logo du softkills mentionné' src={`${import.meta.env.BASE_URL}${item.src}`} alt={item.alt || item.title} />
                                        )}
                                    </div>
                                    <p className='projects-skills__title'>{item.title}</p>
                                    <div className="projects-skills__level">
                                        <div style={{ width: item.level }}></div>
                                    </div>
                                </div>
                            ))}
                    </div>

                </div>
            </section>


            {/* BOITE MODALE POUR AFFICHER LE DETAIL DES PROJETS */}
            {
                selectedProject !== null && (
                    <div className='projects-modal__container' onClick={() => setSelectedProject(null)}>
                        <div className='projects-modal__content' onClick={(e) => e.stopPropagation()}>
                            <h2>PROJET {selectedProject.id} : {selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                            <div className='modal-project-button'>
                                <a aria-label='Lien vers le repository GitHub du projet' href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="github-link">
                                    <FontAwesomeIcon icon={faSquareGithub} />
                                </a>
                                <button aria-label='Bouton pour voir plus de détails sur le projet' className='see-more' onClick={() => setShowMore(true)}>Voir plus</button>
                            </div>
                            <button aria-label='Bouton pour fermer la boite modale' className="close-button" onClick={() => setSelectedProject(null)}>X</button>
                        </div>
                    </div>
                )
            }

            {showMore && selectedProject && (
                <div className='projects-modal__container second-layer' onClick={() => setShowMore(false)}>
                    <div className='projects-modal__content second-layer' onClick={(e) => e.stopPropagation()}>
                        <h2>PROJET {
                            selectedProject.num === "🔑" ? (
                                <button
                                    className='secret-key-button'
                                    onClick={() => navigate('/secret')}
                                    aria-label="Cliquer pour découvrir la page secrète"
                                >
                                    {selectedProject.num}
                                </button>
                            ) : (
                                selectedProject.num
                            )
                        } : {selectedProject.title}
                        </h2>
                        <p>{selectedProject.difficultes}</p>
                        <p>{selectedProject.competences}</p>
                        <button className="close-button" onClick={() => setShowMore(false)}>X</button>
                    </div>
                </div>
            )}
        </div >
    )
}

export default Projects;



