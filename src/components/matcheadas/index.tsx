import { useState } from 'react';
import matcheadas from '../../assets/img/matcheadas/matcheadas.jpg';


import './style.scss';

const Matcheadas = () => {

    const [toggle, setToggle] = useState(false);

    const triggerToggle = () => {
        setToggle( !toggle )
    }

    return (

        <div className='matcheadas d-flex flex-column'>  
            <div>
            { (toggle === false)?
               <img src={matcheadas} alt="matcheadas" />
              :

              (toggle === true)?

             <div className='project-detail pt-5 pe-5'>
                 <h5>MATCHEADAS PROJECT</h5>
                 <div className='d-flex flex-row pt-5'>
                     <div className='d-flex flex-column'>
                        <h4>INFO</h4>
                        <p className='info-text'>He desarrollado, en conjunto con un equipo de trabajo, una aplicación construyendo una grilla donde se controla el input de quien juegue, aplicando la logica del juego y funcionalidades como un sistema de puntuación de dificultad para crear una experiencia totalmente interactiva. Hemos comenzado nuestro proyecto por el armado de diseño y luego nos hemos enfocado en agregar las funcionalidades correspondientes a JavaScript.</p>
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
                <p className='pt-2'><strong>MATCHEADAS:</strong> HTML / CSS / JAVASCRIPT</p>
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
