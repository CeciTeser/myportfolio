import { useState } from 'react';
import ahorradas from '../../assets/img/ahorradas/ahorradas.jpg';


import './style.scss';

const Ahorradas = () => {

    const [toggle, setToggle] = useState(false);

    const triggerToggle = () => {
        setToggle( !toggle )
    }

    return (

        <div className='container ahorradas'>  
            <div className='img-info'>
                { (toggle === false)?
                    <img src={ahorradas} alt="ahorradas" />
                    :

                    (toggle === true)?

                    <div className='project-detail pt-5 pe-5'>
                        <h5>AHORRADAS PROJECT</h5>
                        <div className='d-flex flex-row pt-5'>
                            <div className='d-flex flex-column'>
                                <h4>INFO</h4>
                                <p className='info-text me-5'>
                                    In this project we have made an application for the registration of income and expenses. It allows us to keep track of expenses incurred and income earned. We have applied what we have learned to structure and store the information in the application, and we have developed different functionalities that allow us to manipulate it and perform operations to work with data. <br />
                                    <br />
                                    <strong>Some of the functionalities</strong> <br />
                                    <br />
                                     
                                    -  add, edit and delete operations and categories.<br />

                                    - filter the operations.<br />

                                    - sort the transactions.<br />

                                    - obtain reports.<br />

                                    -Category with the highest expense or the highest balance.<br />

                                    -Month with the highest profit, highest expense or Totals (expenses, earnings and balances) by category or Totals (expenses, earnings and balances)<br />
                                </p>
                            </div>
                            <div className='d-flex flex-column ps-5'>
                                <h4>SKILLS</h4>
                                <ul className='skills'>
                                    <li>JAVASCRIPT</li>
                                    <li>TYPESCRIPT</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>BOOTSTRAP</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :{}
                }
            </div>
            
            <div className='img-text d-flex flex-row justify-content-between'>
                <p className='pt-2'><strong>AHORRADAS:</strong> JAVASCRIPT / TYPESCRIPT / HTML / CSS / BOOTSTRAP </p>
                <ul className='row info-demo'>
                    <li><button onClick={triggerToggle} >INFO</button></li>
                    <li><a href="https://ahorradas.netlify.app/" target="_blank">DEMO</a></li>
                    <li><a href="https://github.com/CeciTeser/AhorrADAs" target="_blank">CODE</a></li>
                </ul>
            </div>
        </div>

    )
}

export { Ahorradas }
