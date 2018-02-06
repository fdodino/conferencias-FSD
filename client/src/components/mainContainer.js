import React, { Component } from 'react'

// Se agrega Login
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Casos de uso
import Login from './login'
import TalksSearch from './talksSearch'

export default class MainContainer extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={TalksSearch} />
                    <Route exact path='/login' component={Login} />
                </Switch>
            </Router>
        )
    }

}
