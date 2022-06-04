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
                                <p className='info-text me-5'>
                                In this project we have made an application that allows us to list comics and their characters, as well as to obtain information about them. For that we have used a REST API with real data, which has allowed us to make queries to it by passing different parameters that allow us to customize the search and display the data obtained as a response. <br />
                                <br />
                                The API that we have used for this project is the one of Marvel Comics.<br />
                                <br />
                                Some of the functionalities that we have had to give it have been the following ones:<br />
                                <br />
                                -  Search for comics or character, sort the results alphabetically and by release date, in ascending and descending order
                                <br />
                                - The information detail is shown (when clicking on it) 
                                <br />
                                - The total number of results must be shown when the results are listed.
                                <br />
                                - It has a pagination
                                </p>
                            </div>
                            <div className='d-flex flex-column ps-5'>
                                <h4>SKILLS</h4>
                                <ul className='skills'>
                                    <li>JAVASCRIPT</li>
                                    <li>TYPESCRIPT</li>
                                    <li>API REST</li>
                                    <li>HTML</li>
                                    <li>SASS</li>
                                    <li>BOOTSTRAP</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :{}
                }
            </div>
            
            <div className='img-text d-flex flex-row justify-content-between'>
                <p className='pt-2'><strong>COMICS:</strong> JAVASCRIPT / TYPESCRIPT / API REST / HTML / SASS / BOOTSTRAP </p>
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
