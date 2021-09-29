import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Eduwork from './pages/Eduwork';
import Form from './pages/Form';
import Home from './pages/Home';
import News from './pages/News';
import NewsClass from './pages/NewsClass';
import NewsHooks from './pages/NewsHooks';
import Tables from './pages/Tables';


function App() {
  return (
    <Router>
      <div>
         <nav>
            <ul>
              <li>
                <Link to="/">Git Fundamental</Link>
              </li>
              <li>
                <Link to="/Table">Table</Link>
              </li>
              <li>
                <Link to="/News">News</Link>
              </li>
              <li>
                <Link to="/Eduwork">Eduwork ReactJS</Link>
              </li>
              <li>
                <Link to="/Form">Form</Link>
              </li>
              <li>
                <Link to="/NewsClass">News React Class Component</Link>
              </li>
              <li>
                <Link to="/NewsHooks">News React Hooks</Link>
              </li>
            </ul>
         </nav>
         <Switch>
          <Route path="/NewsHooks">
            <NewsHooks />
          </Route>
          <Route path="/NewsClass">
            <NewsClass />
          </Route>
          <Route path="/Form">
            <Form />
          </Route>
          <Route path="/Eduwork">
            <Eduwork />
          </Route>
          <Route path="/News">
            <News />
          </Route>
          <Route path="/Table">
            <Tables />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>   
      </div>
    </Router>
  );
}

export default App;
