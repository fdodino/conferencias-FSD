import React, { Component } from 'react'

// Se agrega Login
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// Casos de uso
import Login from './login'
import TalksSearch from './talksSearch'

// https://www.tutorialspoint.com/reactjs/reactjs_router.htm
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

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
