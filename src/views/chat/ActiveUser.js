import React from 'react';

const ActiveUser = ({data}) => {
    const { id, avatarClass, username, position, userMessage, email, phone, adress, organization } = data;
    return (
        <ul key={id}>
            <li>
                <div className={'ActiveUserPig ' + avatarClass}></div>
            </li>
            <li>{username}</li>
            <li><span className='SmallFontGreyColor'>{position}</span></li>
            <li><span className='SmallFontGreyColor'>{userMessage}</span></li>
            <li className='SmallFontGreyColor'>Email</li>
            <li>{email}</li>
            <li className='SmallFontGreyColor'>Phone</li>
            <li>{phone}</li>
            <li className='SmallFontGreyColor'>Adress</li>
            <li>{adress}</li>
            <li className='SmallFontGreyColor'>Organization</li>
            <li>{organization}</li>
        </ul>
    )
};

export default ActiveUser;