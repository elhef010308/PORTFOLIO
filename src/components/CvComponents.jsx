import { useNavigate } from 'react-router-dom';
import AnimatedTitle from './AnimatedTitle.jsx';
import { memo } from 'react';

// COMPOSANT DES PROJETS DU CV
export function ProjectCard({ id, title, objectives }) {
    const navigate = useNavigate();

    const handleViewClick = () => {
        navigate('/projects', { state: { projectId: id } });
    };


    return (
        <div className="cv-openclassrooms__projects">
            <div className="cv-openclassrooms__projects-title">
                <button onClick={handleViewClick}>VOIR</button>
                <p>{`PROJET ${id} : ${title}`}</p>
            </div>

            <p className="cv-openclassrooms__projects-competences">
                Compétences à développer : 
            </p>
            
            <ul>
                {objectives.map((objective, index) => (
                    <li key={index}>---► {objective}</li>
                ))}
            </ul>
        </div>
    );
}

// COMPOSANT DES CERTIFICATIONS OPENCLASSROOMS
export function CertificationCard({ src, alt, onClick }) {
    return (
        <div className='cv-certification__card' onClick={onClick}>
            <img src={src} alt={alt} loading="lazy" />
        </div>
    );
}

// COMPOSANT POUR LE TITRE "CURRICULUM VITAE"
export const TitleCurriculum = memo(function TitleCurriculum() {
    return <AnimatedTitle text={['Curriculum', 'vitae']} id="text-curriculum" />;
});
