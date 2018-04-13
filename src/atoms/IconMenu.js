import React from 'react';

//MaterialUI
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const MenuIcon = () => {
    return (
        <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
            iconStyle={{color: 'white'}}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
            <MenuItem primaryText="Refresh"/>
            <MenuItem primaryText="Send feedback"/>
            <MenuItem primaryText="Settings"/>
            <MenuItem primaryText="Help"/>
        </IconMenu>
    )
};


export default MenuIcon;