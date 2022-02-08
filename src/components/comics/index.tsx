import { useState } from 'react';
import comics from '../../assets/img/comics/comics.jpg';


import './style.scss';

const Comics = () => {

    const [toggle, setToggle] = useState(false);

    const triggerToggle = () => {
        setToggle( !toggle )
    }

    return (

        <div className='container comics'>  
            <div className='img-info'>
                { (toggle === false)?
                    <img src={comics} alt="comics" />
                    :

                    (toggle === true)?

                    <div className='project-detail pt-5 pe-5'>
                        <h5>COMICS PROJECT</h5>
                        <div className='d-flex flex-row pt-5'>
                            <div className='d-flex flex-column'>
                                <h4>INFO</h4>
                                <p className='info-text'>I have developed, together with a team, an application building a grid where the input of the player is controlled, applying the logic of the game and functionalities such as a difficulty scoring system to create a fully interactive experience. We have started our project by building the design and then we have focused on adding the corresponding functionality on JavaScript.</p>
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
                <p className='pt-2'><strong>COMICS:</strong> HTML / SASS / BOOTSTRAP / TYPESCRIPT / JAVASCRIPT / API REST </p>
                <ul className='row info-demo'>
                    <li><button onClick={triggerToggle} >INFO</button></li>
                    <li><a href="https://buscador-de-comics.netlify.app/" target="_blank">DEMO</a></li>
                    <li><a href="https://github.com/CeciTeser/Buscador-de-Comics" target="_blank">CODE</a></li>
                </ul>
            </div>
        </div>

    )
}

export { Comics }
