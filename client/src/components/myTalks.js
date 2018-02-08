import React, { Component } from 'react'

// Main bar
import CharlasAppBar from './charlasAppBar'

// Custom UI Components
import TalksList from "./talksList"
import ErrorMessage from "./errorMessage"

// Custom Services
import TalksService from "../services/talksService"

const talksService = new TalksService()

export default class MyTalks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            errorMessage: "",
            talks: []
        }
    }
    
    async componentDidMount() {
        await this.searchTalks()
    }

    render() {
        return (
            <div>
                <ErrorMessage
                    message={this.state.errorMessage}
                />
                <CharlasAppBar
                    title="Mis charlas"
                    username={this.props.childProps.user}
                    page="misCharlas"
                />
                <TalksList talks={this.state.talks} message={this.state.errorMessage}/>
            </div>
        )
    }

    async searchTalks() {
        talksService.findByUser(this.props.childProps.user)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error(response.status + " (" + response.statusText + ")")
                }
            })
            .then(talksResult => {
                this.setState({
                    errorMessage: "",
                    talks: talksResult
                })
            })
            .catch((err) => {
                this.setState({
                    errorMessage: "No se pudo obtener las charlas. Error: " + err.message,
                    talks: []
                })
            })
    }

}