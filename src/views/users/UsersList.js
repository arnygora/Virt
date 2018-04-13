import React from 'react';

class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: []
        }
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

    render() {
        return (
            <ul className='UsersList'>
                {this.state.userData.map((item, id) => {
                    return (
                        <li className='UserItem' key={id}>
                            <div className={'AvatarDiv ' + item.avatarClass}></div>
                            <p>{item.username}</p>
                            <p>{item.organization}</p>
                            <p>{item.position}</p>
                            <p>{item.email}</p>
                            <p>{item.phone}</p>
                            <p>{item.adress}</p>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default UsersPage;