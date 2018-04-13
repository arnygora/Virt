import React from 'react';
import MenuIcon from '../../atoms/IconMenu';

class UserCard extends React.Component {
    render() {
        return (
            <div className='d-flex align-items-center justify-content-around'>
                <div className={this.props.data.avatarClass}></div>
                <div>
                    <p className='projectItem m-0'>{this.props.data.username}</p>
                    <span className='projectSite'>{this.props.data.position}</span>
                </div>
                <MenuIcon/>
            </div>
        )
    }
}

export default UserCard;