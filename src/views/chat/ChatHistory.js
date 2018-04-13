import React from 'react';
import './chat.css';

const ListItem = ({item, onClick}) => (
    <li onClick={() => onClick(item)} className='MessageItem'>
        <div className='UserTitle'>
            <div className={item.avatarClass}></div>
            <p className='text-white m-0'>{item.username}</p>
            <span className='DateSpan'>{item.messageDate}</span>
        </div>
        <p className='TextMessage'>{item.userMessage}</p>
    </li>
);

const ChatHistory = ({data, onItemClick}) => {
    const items = data.map(
        (item) => <ListItem item={item} onClick={onItemClick} key={item.id}/>
    );

    return (
        <ul className='MessageBox pl-0' key={data.id}>
            {items}
        </ul>
    );
};

export default ChatHistory;