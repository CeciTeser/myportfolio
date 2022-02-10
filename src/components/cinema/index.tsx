import { useState } from 'react';
import cinema from '../../assets/img/cinema/cinema.jpg';


import './style.scss';

const Cinema = () => {

    const [toggle, setToggle] = useState(false);

    const triggerToggle = () => {
        setToggle( !toggle )
    }

    return (

        <div className='container cinema'>  
            <div className='img-info'>
                { (toggle === false)?
                <img src={cinema} alt="cinema" />
                :

                (toggle === true)?

                <div className='project-detail pt-5 pe-5'>
                    <h5>CINEMA PROJECT</h5>
                    <div className='d-flex flex-row pt-5'>
                        <div className='d-flex flex-column'>
                            <h4>INFO</h4>
                            <p className='info-text me-5'>
                                In this project I have created an application based on the management and use of a movie content platform. Connecting with an api of movies and series (TMDB) I got all the necessary information to nurture my content application.
                                It has two types of actors: administrator and user.<br />
                                <br />
                              
                                <strong>Administrator</strong><br />
                                Login with "role admin". Access to all pages of the site. Select items (movies or series) from the api to add to the playback platform (Firebase). Delete items (movies or series) from the Firebase platform. Delete users.<br />
                                <br />
                                <strong>User</strong><br />
                                Login with "role user". Access only to movies, series and details. Items (movies and series) can be marked as watched or unwatched.<br />
                                <br />
                                <strong>Screens: </strong>Signup, Login, Admin, Home, Movies, Series, Detail

                            </p>
                        </div>
                        <div className='d-flex flex-column ps-5'>
                            <h4>SKILLS</h4>
                            <ul className='skills'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>GRID</li>
                            </ul>
                        </div>
                    </div>
                </div>
                :{}
                }
            </div>
            
            <div className='img-text d-flex flex-row justify-content-between'>
                <p className='pt-2'><strong>CINEMA:</strong> SASS / BOOTSTRAP / TYPESCRIPT/ REACT / REDUX / API REST / FIREBASE </p>
                <ul className='row info-demo '>
                    <li><button onClick={triggerToggle} >INFO</button></li>
                    <li><a href="https://ceciteser.github.io/Tmdb/" target="_blank">DEMO</a></li>
                    <li><a href="https://github.com/CeciTeser/Tmdb" target="_blank">CODE</a></li>
                </ul>
            </div>
        </div>

    )
}

export { Cinema }
