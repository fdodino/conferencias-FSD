import React, { Component } from 'react'

// Material UI Components
import TextField from 'material-ui/TextField'

// Custom UI Components
import TalksList from "./talksList"
import ErrorMessage from "./errorMessage"

// Custom Services
import TalksService from "../services/talksService"

const talksService = new TalksService()

export default class TalksSearch extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            searchValue: "",
            talks: [],
            errorMessage: ""
        }
    }

    render() {
        return (
            <div>
                <ErrorMessage
                    message={this.state.errorMessage}
                />
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
        talksService.filter(searchValue)
            .then(response => {
                if (response.ok) {
                    return response.json() 
                } else { 
                    throw Error(response.status + " (" + response.statusText + ")")
                }
            })
            .then(talks => {
                this.setState({ 
                    searchValue: searchValue ,
                    talks: talks,
                    errorMessage: ""
                })
            })
            .catch((err) => {
                this.setState({ 
                    searchValue: searchValue ,
                    talks: [],
                    errorMessage: "No se pudo obtener las charlas. Error: " + err.message
                })
            })
    }

}