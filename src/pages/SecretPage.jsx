import { Link } from 'react-router-dom';

function SecretPage() {
    return (
        <div className='secret-page'>
            <section className='secret-page__title'>
                <h1>MY SOCIAL NETWORK</h1>
            </section>

            <section className='secret-page__contain'>
                <div className='secret-page__contain-left'>
                    <div className='contain-left__profil'>
                        <img src='' alt='image de profil' aria-label='image de profil' />
                        <h3 className='contain-left__profil-title'></h3>
                        <p className='contain-left__profil-description'></p>
                    </div>

                    <div className='contain-left__categories'>
                        <div>
                            <div className='contain-left__categories-bloc'></div>
                            <p className='contain-left__categories-name'>TOUT</p>
                        </div>
                        <div>
                            <div className='contain-left__categories-bloc'></div>
                            <p className='contain-left__categories-name'>POSTS</p>
                        </div>
                        <div>
                            <div className='contain-left__categories-bloc'></div>
                            <p className='contain-left__categories-name'>IMAGES</p>
                        </div>
                        <div>
                            <div className='contain-left__categories-bloc'></div>
                            <p className='contain-left__categories-name'>VEILLE</p>
                        </div>
                    </div>
                </div>


                <div className='secret-page__contain-middle'></div>


                <div className='secret-page__contain-right'>
                    <Link className='contain-right__button-to-back' to='/'>Revenir à la page d'acceuil</Link>
                </div>
            
            </section>
        </div>
    )
}

export default SecretPage;


/*
🖉⌘▦
*/
