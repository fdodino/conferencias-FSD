import React, { Component } from 'react'
import { TalkCard } from './talkCard'

export default class TalksList extends Component {
    constructor(props) {
        super(props)
        this.items = this.props.items
    }

    render() {
        return (
            this.props.items.map(talk =>
                <TalkCard talk={talk} key={ talk.title }/>
            )
        )
    }

}