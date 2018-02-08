import React, { Component } from 'react'

// Main bar
import CharlasAppBar from './charlasAppBar'

// Material UI Components
import TextField from 'material-ui/TextField'

// Custom UI Components
import TalksGrid from "./talksGrid"
import ErrorMessage from "./errorMessage"

// Custom Services
import TalksService from "../services/talksService"

const talksService = new TalksService()

export default class TalksSearch extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            searchValue: "",
            rooms: [],
            scheduleDTO: [],
            errorMessage: ""
        }
    }

    render() {
        return (
            <div>
                <ErrorMessage
                    message={this.state.errorMessage}
                />
                <CharlasAppBar
                    title="Grilla de charlas"
                    username={this.props.childProps.user}
                    page="grilla"
                />
                <TextField
                    value={ this.state.searchValue } 
                    onChange={ this.searchTalks.bind(this) } 
                    hintText="¿Qué charla le interesa?"
                    floatingLabelText="Valor a buscar..."
                />
                <TalksGrid rooms={this.state.rooms} scheduleDTO={this.state.scheduleDTO}/>
            </div>
        )
    }

    searchTalks(e) {
        const searchValue = e.target.value
        talksService.talkGrid(searchValue)
            .then(response => {
                if (response.ok) {
                    return response.json() 
                } else { 
                    throw Error(response.status + " (" + response.statusText + ")")
                }
            })
            .then(talkGrid => {
                this.setState({
                    searchValue: searchValue, 
                    rooms: talkGrid.rooms,
                    scheduleDTO: talkGrid.scheduleDTO,
                    errorMessage: ""
                })
            })
            .catch((err) => {
                this.setState({ 
                    searchValue: searchValue, 
                    rooms: [],
                    scheduleDTO: [],
                    errorMessage: "No se pudo obtener las charlas. Error: " + err.message
                })
            })
    }

}