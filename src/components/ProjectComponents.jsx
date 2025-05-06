import { useState } from 'react';
import AnimatedTitle from './AnimatedTitle.jsx';

export function ProjectsPage({ src, alt, id, title, description, github, onClick, size = 'center' }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? src.length - 1 : prev - 1
        );
    };
    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === src.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className={`project-card ${size}`}>
            <div className='project-img-content'>
                <button className='projet-button-left' onClick={handlePrev}>←</button>

                <img
                    src={src[currentIndex]}
                    alt={alt?.[currentIndex] || ""}
                />

                <button className='projet-button-right' onClick={handleNext}>→</button>
            </div>
            <p className='p-project-card-one'>{id}</p>
            <p className='p-project-card-two'>{title}</p>
            <button className='project-details' onClick={onClick}>Voir la description</button>
        </div>
    );
}




// COMPOSANT POUR LE TITRE PRINCIPAL DE LA PAGE PROJETS
export function TitleProjectsPage() {
    return <AnimatedTitle text={['Ma page des projets']} id="text-page-projets" />;
}