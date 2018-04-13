import React from 'react';

//MaterialUI
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const DropdownMenu = () => {
        return (
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
                iconStyle={{color: 'white'}}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
                <MenuItem primaryText="Quened"/>
                <MenuItem primaryText="Planning"/>
                <MenuItem primaryText="Design"/>
                <MenuItem primaryText="Development"/>
                <MenuItem primaryText="Testing"/>
                <MenuItem primaryText="Completed"/>
                <MenuItem primaryText="In progress"/>
                <MenuItem primaryText="RFI"/>
                <MenuItem primaryText="To Do"/>
            </IconMenu>
        );
};

export default DropdownMenu;