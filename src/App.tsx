import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router } from 'react-router-dom';

import { Profile } from './components/profile';
import { Matcheadas } from './components/matcheadas';
import { Ahorradas } from './components/ahorradas';
import { Comics } from './components/comics';
import { Todo } from './components/todoapp';

import './style.scss'
import { Cinema } from './components/cinema';


function App() {
  return (
   
    <Router>

      <div className="container mt-5">

        <div className="row">

          <div className="col-lg-3 fixed mb-sm-5">
            <Profile/>
          </div>
          
          <div className="col-lg-9 mb-sm-5">

            <Cinema/>

            <Todo/>

            <Comics/>

            <Ahorradas/>

            <Matcheadas/>

          </div>

        </div>

      </div>

    </Router>

  );
}

export default App;

