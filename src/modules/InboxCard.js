import React from 'react';
import './inboxCard.css';

class InboxCard extends React.Component {
    render() {
        return(
            <ul className='InboxList'>
                <li className='cardHeader'>
                    <h5 className='text-center text-light m-0 p-3'>Inbox (<span className='text-info'>{this.props.data.length}</span>)</h5>
                </li>
                {
                    this.props.data.map((data, index) => {
                        if (index < 3) {
                            return (
                                <li className='inboxCard' key={index}>
                                    <div className={data.avatarClass}></div>
                                    <div className='textContainer'>
                                        <p className='inboxItem m-0'>{data.username}<span className='date'>{data.messageDate}</span></p>
                                        <span className='inboxMsg'>{data.userMessage}</span>
                                    </div>
                                </li>
                            )
                        }
                        return null;
                    })
                }
            </ul>
        )}
}

export default InboxCard;