import { useState } from 'react';

function ModalSecretPage({ onLogin }) {
    const [pseudo, setPseudo] = useState('');
    const [passeword, setPasseword] = useState('');

    function handleSubmit(e) {
        e.preventDefault(); // éviter le rechargement de la page
        onLogin(pseudo , passeword);
    }

    return (
        <div className='secret-page__login-modal'>
            <h2 className='secret-page__modal-title'>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <label className='secret-page__modal-label' for='pseudo'>Nom d'utilisateur</label><br />
                <input 
                    className='secret-page__modal-input' 
                    id='pseudo' 
                    type='text' 
                    name='pseudo'
                    value={pseudo}
                    onChange={e => setPseudo(e.target.value)} 
                    required 
                />
                <br /><br />

                <label className='secret-page__modal-label' for='passeword'>Mot de passe</label><br />
                <input 
                    className='secret-page__modal-input' 
                    id='passeword' 
                    type='password' 
                    name='passeword'
                    value={passeword} 
                    onChange={e => setPasseword(e.target.value)}
                    required 
                />
                <br /><br />

                <button type='submit' className='secret-page__login-button'>Se connecter</button>
            </form>
        </div>
    )
}

export default ModalSecretPage;



/*
import { useState } from 'react';
import ModalSecretPage from '../components/ModalSecretPage';

function SecretPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [modalOpen, setModalOpen] = useState(true);

    const truePseudo = import.meta.env.VITE_PSEUDO;
    const truePassword = import.meta.env.VITE_PASSWORD;

    function handleLogin(pseudo, password) {
        if (pseudo === truePseudo && password === truePassword) {
            setIsLoggedIn(true);
            setModalOpen(false);
        } else {
            alert('Identifiants de connexion incorrects !');
        }
    }

    return (
        <div className='secret-page'>
            {modalOpen && <ModalSecretPage onLogin={handleLogin} />}

            {!modalOpen && isLoggedIn && (
                <div className='secret-page__content'>
                    <h1>HELLO</h1>
                    <p>Bravo, vous venez de trouver la première page cachée dans ce portfolio...</p>
                </div>
            )}
        </div>
    )
}
*/
