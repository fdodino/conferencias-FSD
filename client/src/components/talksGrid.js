import React, { Component } from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table'
import {
    TalkCard,
    RoomComponent,
    ScheduleComponent
} from './talkCard'
import './talkCard.css'

export default class TalksGrid extends Component {

    render() {
        return (
            <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false} className="header">
                    <TableRow key="header" displayBorder={false}>
                        <TableHeaderColumn key="horarios" width="20%">
                            <div align="center">
                                <h2 className="header">Horarios</h2>
                            </div>
                        </TableHeaderColumn>
                        {this.props.rooms.map(room =>
                            <TableHeaderColumn key={room.name}>
                                    <RoomComponent room={room} key={room.name}/>
                            </TableHeaderColumn>
                        )}
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                {this.props.scheduleDTO.map((scheduleDTO, index) =>
                    <TableRow key={index} displayBorder={false} className="row">
                        <TableRowColumn width="20%">
                            <div align="center">
                                <ScheduleComponent schedule={scheduleDTO.schedule} key={scheduleDTO.schedule.from} />
                            </div>
                        </TableRowColumn>
                        <TalkColumns talks={scheduleDTO.talks} /> 
                    </TableRow>
                    )
                }
                </TableBody>
            </Table>
        )
    }

}

class TalkColumns extends Component {
    render() {
        return (
            this.props.talks.map((talk, index) =>
            <TableRowColumn key={index}>
                <TalkCard talk={talk} key={index} />
            </TableRowColumn>
            )
        )
    }    
}