import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Cv() {
    const location = useLocation();

    useEffect (() => {
        if (location.state?.scrollTo) {
            const target = document.getElementById(location.state.scrollTo);
            if (state) {
                target.scrollIntoView({ behavior: 'smooth'});
            }
        }
    }, [location]);

    return (
        <div></div>
    )
}

export default Cv;