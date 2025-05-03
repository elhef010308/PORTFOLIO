// page des projets (mes projets - portfolio)
// ajouter les compétences (Mes softskills)

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { ProjectsPage } from '../components/projects-components.jsx';
import { TitleProjectsPage } from '../components/projects-components.jsx';
import projectdetail from '../assets/project-details.json';

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

    return (
        <div className='projects-page'>
            <section className="part-projects-1">
                <div className="projects-title">
                    <TitleProjectsPage />
                </div>
            </section>

            <section className="part-projects-2">
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

                <div className='softskills-container'>

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



