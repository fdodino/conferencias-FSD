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

export default class TalksList extends Component {

    render() {
        return (
            <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false} className="header">
                    <TableRow key="header" displayBorder={false}>
                        <TableHeaderColumn key="charla" width="100%">
                            <div align="center">
                                <h2 className="header">Charla</h2>
                            </div>
                        </TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {this.props.talks.map((talkDTO, index) =>
                        <TableRow key={index} displayBorder={false} className="row">
                            <TableRowColumn width="10%">
                                    <RoomComponent room={talkDTO.room} key={talkDTO.room.name} />
                                    <br/>
                                    <ScheduleComponent schedule={talkDTO.schedule} key={talkDTO.schedule.from} />
                            </TableRowColumn>
                            <TableRowColumn width="90%">
                                <TalkCard talk={talkDTO} key={index} />
                            </TableRowColumn>
                        </TableRow>
                    )
                    }
                </TableBody>
            </Table>
        )
    }

}
