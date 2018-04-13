import React from 'react';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './AdminMenu.css'

const AccountDropdown = () => {
    const handleLogout = () => {
        const {history} = this.props;
        localStorage.removeItem('check');
        history.push('./login')
    };
    return (
        <Dropdown className="AccountAction">
            <DropdownTrigger>
                <span className="fas fa-angle-down text-light"></span>
            </DropdownTrigger>
            <DropdownContent>
                <ul className="DropdownList">
                    <li>
                        <Link to='settings'>Settings</Link>
                    </li>
                    <li>
                        <Link to='./login' onClick={handleLogout}>Log out</Link>
                    </li>
                </ul>
            </DropdownContent>
        </Dropdown>
    )
};

export default withRouter(AccountDropdown);