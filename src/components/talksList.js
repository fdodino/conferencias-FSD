import React, { Component } from 'react'
import { TalkCard } from './talkCard'

export default class TalksList extends Component {
    render() {
        return (
            this.props.items.map(talk =>
                <TalkCard talk={talk} key={ talk.title }/>
            )
        )
    }
}