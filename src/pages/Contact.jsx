import { Helmet } from 'react-helmet';

function Contact() {
    return (
        <div className='contact'>

            <Helmet>
                <title>Page de contact – Portfolio</title>
                <meta name="description" content="Bienvenue sur ma pagede contact, où je vous invite à me contacter pour toutes questions, demandes, conseils, etc. " />
            </Helmet>
            <p className='contact_info-message'>Formulaire de contact en cours de création</p>
            <h2>Page de contact</h2>

            <form action='' method='post'>
                <label for='nom'>NOM</label><br />
                <input type='text' id='nom' name='nom' required />
                <br /><br />

                <label for='firstname'>PRÉNOM</label><br />
                <input type='text' id='firstname' name='prenom' required />
                <br /><br />

                <label for='email'>E-MAIL</label><br />
                <input type='email' id='email' name='email' required />
                <br /><br />

                <label for="message">MESSAGE</label><br />
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