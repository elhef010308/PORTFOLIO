import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        // ⚠️ Quand la page sera prête : simplement SUPPRIMER la classe "contact--wip"
        <div className='contact contact--wip'>
            <Helmet>
                <title>Page de contact – Portfolio</title>
                <meta name="description" content="Bienvenue sur ma pagede contact, où je vous invite à me contacter pour toutes questions, demandes, conseils, etc. " />
            </Helmet>

            {/* ===== WIP: À SUPPRIMER lorsque la page sera prête ===== */}
            <p className="contact_info-message">Formulaire de contact en cours de création</p>
            {/* ===== FIN WIP ===== */}

            <h2>Page de contact</h2>

            <form action='' method='post'>
                <label htmlFor='nom'>NOM</label><br />
                <input type='text' id='nom' name='nom' required />
                <br /><br />

                <label htmlFor='firstname'>PRÉNOM</label><br />
                <input type='text' id='firstname' name='prenom' required />
                <br /><br />

                <label htmlFor='email'>E-MAIL</label><br />
                <input type='email' id='email' name='email' required />
                <br /><br />

                <label htmlFor="message">MESSAGE</label><br />
                <textarea id="message" name="message" rows="5" required></textarea>
                <br /><br />

                <div className='contact-page__button-container'>
                    <button className='button-submit' type='submit'>Envoyer</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;