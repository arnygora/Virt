import React from 'react';
import ChatHistory from './ChatHistory';
import Chat from './Chat';
import ActiveUser from './ActiveUser';
class MainComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            userData: [],
            active: 0,
            messageStory: [],
            display: false
        };
    }

    componentWillMount() {
        fetch('/api/user/chatData', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'get'
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    userData: res
                });
            })
        }
    handleActiveUserSelection = (item) => {
        this.setState({
            active: item,
            messageStory: item.userMessage,
            display: true
        });
    };

    render() {
        const active = this.state;
        return(
            <div>
                <div className="row ChatContainer">
                    <div className="col-lg-3 Box">
                        <ChatHistory data={this.state.userData} onItemClick={this.handleActiveUserSelection}/>
                    </div>
                    <div className="col-lg-7">
                        <Chat data={this.state.messageStory}/>
                    </div>
                    {active && (
                        <div className='col-lg-2 ActiveUser'>
                            <aside className="Sidebar">
                                <ActiveUser data={this.state.active}/>
                            </aside>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default MainComponent;