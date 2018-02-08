// Base React Components
import React, { Component } from 'react'

// AppBar Definition
import AppBar from 'material-ui/AppBar'

// Toolbar
import RaisedButton from 'material-ui/RaisedButton'

// User
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import SvgIconFace from 'material-ui/svg-icons/action/face'

// Navigation
import { withRouter } from "react-router-dom"

class CharlasAppBar extends Component {

    buildMenu(pageName, label, url, menuCondition) {
        if (this.props.page !== pageName && menuCondition()) {
            return <RaisedButton label={label} style={{ margin: 'auto' }} onClick={() => this.props.history.push(url)} default={true} />
        }
    }

    render() {
        const initial = (this.props.username || ' ').substr(0, 1).toUpperCase()

        const chipUser = (this.props.username) ? 
                <Chip style={{ margin: 'auto' }}>
                    <Avatar size={32}>{initial}</Avatar>
                    {this.props.username}
                </Chip>
                :
                <Chip style={{ margin: 'auto' }}>
                    <Avatar color="#444" icon={<SvgIconFace />} />
                    Usuario anónimo
                </Chip>
        
        return (
            <AppBar
                title={this.props.title}
            >
                {chipUser}
                &nbsp;&nbsp;
                {this.buildMenu('login', 'Login', '/login', () => !this.props.username)}
                {this.buildMenu('misCharlas', 'Mis charlas', '/misCharlas', () => this.props.username)}
                {this.buildMenu('grilla', 'Grilla', '/', () => true)}
            </AppBar>
        )
    }
}

export default withRouter(CharlasAppBar)
