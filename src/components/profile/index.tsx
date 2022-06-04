import ceci from '../../assets/img/profile/ceci.jpg';

import './style.scss';

const Profile =()=>{
    return (
        <div className="profile">

        
            <img src={ceci} alt="profile" />
        
            <h4 className='mt-3'>CECI TESER</h4>
            <h5>FRONTEND DEVELOPER</h5>
        
            <p className='pt-3'>I´m a Frontend developer and I´m looking for the first experiences as Trainee or Junior developer.</p>
        

            <div className='mt-5'>
                <h3>PROGRAMMING SKILLS</h3>
                <ul className='pt-2'>
                    <li>React js (Hooks, Hoc & Context)</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Redux</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Responsive design</li>
                    <li>Api REST</li>
                    <li>Firebase</li>
                    <li>Bootstrap</li>
                    <li>Sass</li>
                    <li>HTML5</li> 
                    <li>CSS</li>
                </ul>
            </div>

            <div className='mt-5'>
                <h3>LANGUAGE</h3>
                <ul className='pt-2'>
                    <li>English bilingual</li>
                    <li>Spanish native</li>
                    <li>Francés: 1er degreé</li>
                </ul>
            </div>

            <div className='mt-5'>
                <h3>CONTACT</h3>
                <ul className='pt-2'>
                    <li> <a href="mailto:mcteser@gmail.com<" target="_blank">mcteser@gmail.com</a></li>

                    <li> <a href="https://www.linkedin.com/in/ceciliateisaire/" target="_blank" >linkedin:/ceciliateisaire</a></li>

                    <li> <a href="https://github.com/CeciTeser" target="_blank">github.com/CeciTeser</a></li>
                </ul>
            </div>

        </div>
    )
}

export { Profile }