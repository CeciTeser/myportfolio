import 'bootstrap/dist/css/bootstrap.min.css';
import { Profile } from './components/profile';
import {BrowserRouter as Router } from 'react-router-dom'
import { Matcheadas } from './components/matcheadas';


function App() {
  return (
   
    <Router>
      <div className="container mt-5">
        <div className="row">
          <div className="col-2">
            <Profile/>
          </div>
          <div className="col-8 ms-5">
            <Matcheadas/>
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;

