import { useState } from 'react';
import todo from '../../assets/img/todoapp/todo.jpg';


import './style.scss';

const Todo = () => {

    const [toggle, setToggle] = useState(false);

    const triggerToggle = () => {
        setToggle( !toggle )
    }

    return (

        <div className='container todo'>  
            <div className='img-info'>
                { (toggle === false)?
                    <img src={todo} alt="todo" />
                    :

                    (toggle === true)?

                    <div className='project-detail pt-5 pe-5'>
                        <h5>TO DO APP PROJECT</h5>
                        <div className='d-flex flex-row pt-5'>
                            <div className='d-flex flex-column'>
                                <h4>INFO</h4>
                                <p className='info-text me-5'>
                                    The app was thought for those people who have dogs and need to organize their daily, monthly and/or yearly tasks.<br />
                                    <br />
                                    Each user has their own profile in which they can upload the names of their dogs, I have also used a call to an Api that allows me to access a list of breeds for you to select from when uploading your dog's profile. You can then select one of your dogs and query, add, edit or delete a specific task for the dog you have selected.<br />
                                    <br />
                                    Tasks have statuses (pending, in process, completed, cancelled).<br />
                                    <br />
                                    You can also add, delete or edit categories that you think can be useful to catalog a task.
                                </p>    
                            </div>
                            <div className='d-flex flex-column ps-5'>
                                <h4>SKILLS</h4>
                                <ul className='skills'>
                                <li>REACT</li>
                                <li>TYPESCRIPT</li>
                                <li>API REST</li>
                                <li>FIREBASE</li>
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
                <p className='pt-2'><strong>TO DO APP:</strong>  REACT / TYPESCRIPT / API REST / FIREBASE / SASS / BOOTSTRAP</p>
                <ul className='row info-demo'>
                    <li><button onClick={triggerToggle} >INFO</button></li>
                    <li><a href="https://ceciteser.github.io/todoapp/" target="_blank">DEMO</a></li>
                    <li><a href="https://github.com/CeciTeser/todoapp" target="_blank">CODE</a></li>
                </ul>
            </div>
        </div>

    )
}

export { Todo }
