import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import EventFeed from './EventFeed'
import Login from './Login';
import Logout from './Logout';
import Register from './Register'
import EventAdd from './EventAdd'
import EventAdded from './EventAdded'
import Event from './Event'
import Events from './Events'
import styles from './main.css'

function App(){

    return (
        <div>
            <Menu/>
            <Router>
                <Switch>
                    <Route exact path='/' component={Events} />
                    <Route exact path='/event/:id' component={Event} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/add_event' component={EventAdd} />
                    <Route path='/added_event' component={EventAdded} />
                    <Route path='/logout' component={Logout} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;