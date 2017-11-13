import React, { Component } from 'react'

// Material UI Components
import TextField from 'material-ui/TextField'

// Custom UI Components
import TalksList from "./talksList"

// Custom Services
import TalksService from "../services/talksService"

const talksService = new TalksService()

export default class TalksSearch extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            searchValue: "",
            talks: []
        }
    }

    render() {
        return (
            <div>
                <TextField 
                    value={ this.state.searchValue } 
                    onChange={ this.searchTalks.bind(this) } 
                    hintText="Valor a buscar..."
                />
                <TalksList items={this.state.talks}/>
            </div>
        )
    }

    searchTalks(e) {
        const searchValue = e.target.value
        this.setState({ 
            searchValue: searchValue ,
            talks: talksService.filter(searchValue)
        })
    }

}