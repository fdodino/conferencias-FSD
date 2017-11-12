import React, {
    Component
} from 'react'

export default class ListView extends Component {
    constructor(props) {
        super(props)
        this.items = this.props.items
    }

    render() {
        return (
            this.props.items.map(talk =>
                <div>
                    <span> 
                    {talk.author}
                    </span>
                    <span> 
                    { talk.title }
                    </span> 
                    <span> 
                    {talk.room} 
                    </span>
                </div>
            )
        )
    }
}