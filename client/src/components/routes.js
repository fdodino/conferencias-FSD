import React, { Component } from 'react'

// Se agrega Login
// Y un menú de opciones con links
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Casos de uso
import TalksSearch from './talksSearch'
import Login from './login'

class Routes extends Component {

    // https://stackoverflow.com/questions/41679324/how-do-i-pass-parent-state-to-its-child-components

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' render={() => <TalksSearch childProps={this.props.childProps} />} />
                        <Route exact path='/login' render={() => <Login childProps={this.props.childProps} />} />
                    </Switch>
                </Router>
            </div>
        )
    }

}

export default Routes
