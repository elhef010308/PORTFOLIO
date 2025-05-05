// src/components/cv-component.jsx
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <img src={src} alt={alt} />
        </div>
    );
}

// COMPOSANT POUR LE TITRE "CURRICULUM VITAE"
export function TitleCurriculum() {
    const text = ['Curriculum', 'vitae'];
    const containerRef = useRef(null);

    const createLetterArray = (array) => {
        return array.map(line => line.split(''));
    };

    const createLetterLayers = (array) => {
        return array.map(line => {
            return line.map((letter) => {
                let layer = '';
                for (let i = 1; i <= 2; i++) {
                    if (letter === ' ') {
                        layer += `<span class="space">&nbsp;</span>`;
                    } else {
                        layer += `<span class="letter-${i}">${letter}</span>`;
                    }
                }
                return layer;
            });
        });
    };

    const createLetterContainers = (array) => {
        return array.map(line => {
            return `<div class="line">${line.map(letter => `<div class="wrapper">${letter}</div>`).join('')}</div>`;
        });
    };

    useEffect(() => {
        const container = containerRef.current;
        container.innerHTML = createLetterContainers(
            createLetterLayers(createLetterArray(text))
        ).join('');

        const spans = Array.prototype.slice.call(container.getElementsByTagName('span'));

        let time = 250;
        spans.forEach(span => {
            setTimeout(() => {
                span.parentElement.style.width = span.offsetWidth + 'px';
                span.parentElement.style.height = span.offsetHeight + 'px';
            }, 250);
        });

        spans.forEach(span => {
            time += 75;
            setTimeout(() => {
                span.parentElement.style.top = '0px';
            }, time);
        });
    }, []);

    return <div id="text-curriculum" ref={containerRef}></div>;
}
