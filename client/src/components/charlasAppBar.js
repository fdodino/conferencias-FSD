// Base React Components
import React, { Component } from 'react'

// AppBar Definition
import AppBar from 'material-ui/AppBar'

// User
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import SvgIconFace from 'material-ui/svg-icons/action/face'


class CharlasAppBar extends Component {

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
            </AppBar>
        )
    }
}

export default CharlasAppBar
