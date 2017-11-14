import React, { Component } from 'react'
import Snackbar from 'material-ui/Snackbar'

export default class ErrorMessage extends Component {

    render() {
        return (
            <Snackbar
                open={this.props.message !== ""}
                message={this.props.message}
                autoHideDuration={5000}
                bodyStyle={{ backgroundColor: '#980F25' }} 
            />
        )
    }
}