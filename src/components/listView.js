import React, {
    Component
} from 'react'

export default class ListView extends Component {
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