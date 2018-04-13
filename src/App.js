import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Home from './views/home/Home';
import Workflow from './views/workflow/Workflow';
import ProjectsList from './views/projects/ProjectsList';
import Users from './views/users/UsersPage';
import Statistics from './views/statistics/Statistics';
import Settings from './views/settings/Settings';
import MainComponent from './views/chat/MainComponent';
import Authorization from './views/Authorization/AuthPage';
import PrivateLayout from './views/PrivateLayout';
import NotFoundPage from './views/notFoundPage/NotFoundPage';

import './index.css';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
          <Router>
              <Switch>
                  <PrivateLayout exact path='/' component={Home}/>
                  <PrivateLayout exact path='/workflow' component={Workflow}/>
                  <PrivateLayout exact path='/projects' component={ProjectsList}/>
                  <PrivateLayout exact path='/chat' component={MainComponent}/>
                  <PrivateLayout exact path='/users' component={Users}/>
                  <PrivateLayout exact path='/statistics' component={Statistics}/>
                  <PrivateLayout exact path='/settings' component={Settings}/>

                  <Route exact path='/login' component={Authorization}/>
                  <Route component={NotFoundPage}/>
              </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
