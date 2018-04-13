import React from 'react';
import BadgeRing from '../atoms/Badge'
import AccountDropdown from '../atoms/AdminMenu';

import SearchBox from '../atoms/searchField/SearchBox';

import './topBar.css'

class TopBar extends React.Component {
    render() {
        return(
            <header className='TopHeader'>
                <div className='logo'>
                    <h1><img src="../img/logo.png" alt="virtus" /></h1>
                </div>
                <div className='adminInfo'>
                    <a className='addFile' href="/">Add <span className='addFileBtn'>+</span></a>
                    <SearchBox />
                    <BadgeRing/>
                    <div className='Avatar d-flex align-items-center'>
                        <div className='userImg d-block mr-2'></div>
                        <AccountDropdown />
                    </div>
                </div>
            </header>
        )
    }
}

export default TopBar;