import { useState } from "react";

export function ProjectsPage({ src, alt, id, title, description, github, onClick }) {
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
        <div className='project-card'>
            <div className='project-img-content'>
                <button className='projet-button-left' onClick={handlePrev}>←</button>

                <img
                    src={src[currentIndex]}
                    alt={alt?.[currentIndex] || ""}
                />

                <button className='projet-button-right' onClick={handleNext}>→</button>
            </div>
            <p>{id} : {title}</p>
            <button className='project-details' onClick={onClick}>Voir la description</button>
        </div>
    );
}




// COMPOSANT POUR LE TITRE PRINCIPAL DE LA PAGE PROJETS
export function TitleProjectsPage() {
    const text = ['Ma page des projets'];
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

    return <div id="text-page-projets" ref={containerRef}></div>;
}