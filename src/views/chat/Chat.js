import React from "react";
import io from "socket.io-client";

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            message: '',
            messages: [],
            date: new Date()
        };

        this.socket = io('localhost:4000');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            this.setState({messages: [...this.state.messages, data]});
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                message: this.state.message
            });
            this.setState({
                message: ''
            });
             this.setState(prevState => ({
                 date: new Date()
             }));
        }
    }
    render(){
        return (
            <div className="ChatBody">
                <div className="MessageBody">
                    <div>
                        <div className='MessageStory'>{this.props.data}</div>
                        {this.state.messages.map((message, index) => {
                            return (
                                <div className='MessageBox' key={index}>
                                    <div className="Messages" key={index}>{message.message}</div>
                                    <div className='NewDate'>{this.state.date.toLocaleString()}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <form onSubmit={this.sendMessage} className="ChatForm">
                    <input type="text" placeholder="Write a message" className="form-control"
                           value={this.state.message} autoFocus
                           onChange={ev => this.setState({message: ev.target.value})} />
                    <br/>
                </form>
            </div>
        );
    }
}

export default Chat;