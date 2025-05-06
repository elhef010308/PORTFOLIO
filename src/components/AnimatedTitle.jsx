import { useEffect, useRef } from 'react';

export default function AnimatedTitle({ text, id }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const createLetterArray = (array) => array.map(line => line.split(''));

        const createLetterLayers = (array) =>
            array.map(line =>
                line.map(letter => {
                    let layer = '';
                    for (let i = 1; i <= 2; i++) {
                        if (letter === ' ') {
                            layer += `<span class="space">&nbsp;</span>`;
                        } else {
                            layer += `<span class="letter-${i}">${letter}</span>`;
                        }
                    }
                    return layer;
                })
            );

        const createLetterContainers = (array) =>
            array.map(line =>
                `<div class="line">${line.map(letter => `<div class="wrapper">${letter}</div>`).join('')}</div>`
            );

        const container = containerRef.current;
        container.innerHTML = createLetterContainers(
            createLetterLayers(createLetterArray(text))
        ).join('');

        const spans = Array.from(container.getElementsByTagName('span'));

        spans.forEach((span) => {
            setTimeout(() => {
                span.parentElement.style.width = span.offsetWidth + 'px';
                span.parentElement.style.height = span.offsetHeight + 'px';
            }, 250);
        });

        let time = 250;
        spans.forEach((span) => {
            time += 75;
            setTimeout(() => {
                span.parentElement.style.top = '0px';
            }, time);
        });
    }, [text]);

    return <div id={id} ref={containerRef}></div>;
}
