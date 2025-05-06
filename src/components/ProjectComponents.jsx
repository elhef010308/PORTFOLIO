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
        <div className={`projects__cards-card ${size}`}>
            <div className='projects-card__image'>
                <button className='projects-card__button left' onClick={handlePrev}>←</button>

                <img
                    src={src[currentIndex]}
                    alt={alt?.[currentIndex] || ""}
                />

                <button className='projects-card__button right' onClick={handleNext}>→</button>
            </div>
            <p className='projects-card__id'>PROJET {id}</p>
            <p className='projects-card__title'>{title}</p>
            <button className='projects-card__details-button' onClick={onClick}>Voir la description</button>
        </div>
    );
}



// COMPOSANT POUR LE TITRE PRINCIPAL DE LA PAGE PROJETS
export function TitleProjectsPage() {
    return <AnimatedTitle text={['Ma page des projets']} id="text-page-projets" />;
}