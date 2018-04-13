import React from 'react';

class NewMsgNotification extends React.Component {
    constructor() {
        super();
        this.state = {
            displaying: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                displaying: true
            })
        }, 3000)
    }
    render() {
        return (
            this.state.displaying &&
            <div style={{background: '#2196f3', width: 20, height: 20, borderRadius: '50%', position: 'absolute', top: -8, right: -11, border: '3px solid #2f3242'}}>
            </div>
        )
    }
}

export default NewMsgNotification;