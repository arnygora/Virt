import React from 'react';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Inbox from '../modules/InboxCard';

import './Badge.css'
import data from '../config/usersData'

class BadgeRing extends React.Component {
    constructor() {
        super();
        this.state = {
            displaying: false,
            isOpen: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                displaying: !this.state.displaying
            })
        }, 3000)
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return(
           <div className='BadgeStyle'>
               {this.state.displaying &&
               <Badge
                   onClick={this.handleClick}
                   badgeContent={3}
                   primary={true}
                   badgeStyle={{top: 6, right: 6}}>
                   <NotificationsIcon color={'white'}/>
               </Badge> }
               {this.state.isOpen &&
                   <div className='DropdownMsg'>
                       <Inbox data={data}/>
                   </div> }
           </div>
        )
    }
}

export default BadgeRing;
