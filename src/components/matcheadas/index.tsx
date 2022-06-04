import { useState } from 'react';
import matcheadas from '../../assets/img/matcheadas/matcheadas.jpg';


import './style.scss';

const Matcheadas = () => {

    const [toggle, setToggle] = useState(false);

    const triggerToggle = () => {
        setToggle( !toggle )
    }

    return (

        <div className='container matcheadas'>  
            <div className='img-info'>
                { (toggle === false)?
                    <img src={matcheadas} alt="matcheadas" />
                    :

                    (toggle === true)?

                    <div className='project-detail pt-5 pe-5'>
                        <h5>MATCHEADAS PROJECT</h5>
                        <div className='d-flex flex-row pt-5'>
                            <div className='d-flex flex-column'>
                                <h4>INFO</h4>
                                <p className='info-text me-5'>
                                    In this project we have realized a browser game known as match-3.    <br />
                                    <br />

                                    We have developed an application by building a grid where player input is controlled, applying game logic and features such as a difficulty scoring system to create a fully interactive experience.    <br />
                                    <br />

                                    Play with it and have fun while testing it!
                                </p>
                            </div>
                            <div className='d-flex flex-column ps-5'>
                                <h4>SKILLS</h4>
                                <ul className='skills'>
                                    <li>JAVASCRIPT</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :{}
                }
            </div>
            
            <div className='img-text d-flex flex-row justify-content-between'>
                <p className='pt-2'><strong>MATCHEADAS:</strong> JAVASCRIPT / HTML / CSS </p>
                <ul className='row info-demo'>
                    <li><button onClick={triggerToggle} >INFO</button></li>
                    <li><a href="https://cabezadenispero.github.io/matcheadas/" target="_blank">DEMO</a></li>
                    <li><a href="https://github.com/CeciTeser/Matcheadas" target="_blank">CODE</a></li>
                </ul>
            </div>
        </div>

    )
}

export { Matcheadas }
