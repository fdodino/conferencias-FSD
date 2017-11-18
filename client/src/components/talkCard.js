import React, { Component } from 'react'

import './talkCard.css'

// Material UI - Paper
import Paper from 'material-ui/Paper'
import {Toolbar} from 'material-ui/Toolbar'

// Material UI - Chip
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'

// Iconos
import Alarm from 'mui-icons/cmdi/alarm'

export class TalkCard extends Component {

    render() {
        if (this.props.talk === null) 
            return null
        return (
            <Paper rounded={true}>
                <Toolbar>
                    <h3 className="title">{this.props.talk.title} </h3>
                </Toolbar>
                <h2 className="author">{this.props.talk.author}</h2>
            </Paper>
        )
    }

}

export class RoomComponent extends Component {
    render() {
        return (
            <Chip backgroundColor={this.props.room.color}>
                {this.props.room.name}
            </Chip>
        )
    }
}

export class ScheduleComponent extends Component {
    render() {
        return (
            <div align="center">
                <Chip>
                    <Avatar>
                        <Alarm/>
                    </Avatar>
                    {this.props.schedule.from} - {this.props.schedule.to}
                </Chip>
            </div>
        )
    }
}