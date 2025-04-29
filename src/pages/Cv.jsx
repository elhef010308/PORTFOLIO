import cvImage from '../images/cv-image.png';
import { ProjectCard } from '../components/components.jsx';
import { CertificationCard } from '../components/components.jsx';
import projectsDatas from '../assets/projects.json';
import certifications from '../assets/certifications.json';

function Cv() {
    return (
        <div className='cv-page'>
            <section className='part-cv-1'>
                <div className='title-cv-container'>
                    <div className='cv-title'>
                        <h1>Curriculum Vitae</h1>
                    </div>
                    <div className="cv-image">
                        <img
                            alt="cv"
                            src={cvImage}
                        />
                        <a href="#" download>Télécharger</a>
                    </div>
                </div>
            </section >

            <div className='openclassrooms'>
                <h2>MON PARCOURS OPENCLASSROOMS (2025)</h2>
                <p className='formation'>Formation "Développeur Web"</p>
                <a href='/cv.pdf' download>
                    Voir le programme
                </a>
                <div className='projects-container'>
                    {projectsDatas.map(project => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            objectives={project.objectives}
                        />
                    ))}
                </div>
            </div>

            <div className='certifications'>
                <p className='formation'>Certifications Openclassrooms</p>
                <div className='certifications-wrapper'>
                    <div className='round left'></div>  {/* Rond gauche fixe */}
                    <div className='certifications-scroll'>
                        {certifications.map((certif) => (
                            <CertificationCard
                                key={certif.id}
                                src={certif.src}
                                alt={certif.alt}
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

        </div >
    );
}

export default Cv;