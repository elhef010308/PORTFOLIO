import { Link } from 'react-router-dom';

function SecretPage() {
    // Importe toutes les images d'un dossier précis
    const importAll = (importFn) => importFn.keys().map(importFn);

    // import.meta.glob permet d'importer dynamiquement
    // on importe toutes les images du dossier "SecretPage"
    // "eager: true" signifie : importe immédiatement tous les fichiers au chargement du module
    const images = Object.values(
        import.meta.glob('../images/SecretPage/*.webp', { eager: true })
    );

    return (
        <div className='secret-page'>
            <h1 className='secret-page__title'>Ma gallerie photos</h1>           

            <div className='secret-page__gallery'>
                {images.map((img, index) => (
                    <figure key={index}>
                        <img src={img.default} alt={`image ${index + 1}`} />
                    </figure>
                ))}
            </div>

            <div className='secret-page__to-back-home-page'>
                <Link className='secret-page__button-to-back' to='/'>Revenir à la page d'acceuil</Link>
            </div>
        </div>
    )
}

export default SecretPage;