import { useNavigate } from 'react-router-dom';
import AnimatedTitle from './AnimatedTitle.jsx';

// COMPOSANT DES PROJETS DU CV
export function ProjectCard({ id, title, objectives, isLeft }) {
    const navigate = useNavigate();

    const handleViewClick = () => {
        navigate('/projects', { state: { projectId: id } });
    };


    return (
        <div className={`project ${isLeft ? 'left' : 'right'}`}>
            <div className={`projet-title-container ${isLeft ? 'left' : 'right'}`}>
                <button className='button-see-project' onClick={handleViewClick}>VOIR</button>
                <p>
                    {isLeft
                        ? `PROJET ${id} : ${title}`
                        : `${title} : ${id} PROJET`}
                </p>
            </div>
            <p className={`competences ${isLeft ? 'left' : 'right'}`}>
                Compétences à développer
            </p>
            <ul>
                {objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                ))}
            </ul>
        </div>
    );
}

// COMPOSANT DES CERTIFICATIONS OPENCLASSROOMS
export function CertificationCard({ src, alt, onClick }) {
    return (
        <div className='certification-card' onClick={onClick}>
            <img src={src} alt={alt} loading="lazy"/>
        </div>
    );
}

// COMPOSANT POUR LE TITRE "CURRICULUM VITAE"
export function TitleCurriculum() {
    return <AnimatedTitle text={['Curriculum', 'vitae']} id="text-curriculum" />;
}
