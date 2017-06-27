// Web API files must go into a sepearte .NET project
// CORS must be enabled
// <Home addMember={this.handleAddMember.bind(this)} />

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home';
import NavHeader from './components/NavHeader';
import Members from './components/Members';
import Edit from './components/Edit';

import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
<Router>
    <div>
      <NavHeader />        
      <Route exact path='/' component={Home}/>
      <Route path='/members' component={Members}/>
      <Route path='/edit/:id' component={Edit}/>
    </div>
</Router>
), document.getElementById('root'));

registerServiceWorker();