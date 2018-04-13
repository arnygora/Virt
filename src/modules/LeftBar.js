import React from 'react';
import { NavLink } from 'react-router-dom';
import NewMsgNotification from '../atoms/NewMsgNotification';
import './leftBar.css'

const LeftBar = () => {
    return(
        <nav className='leftBar'>
            <ul className="mainNav">
                <li><NavLink activeClassName="selected" to="/"><span className="fas fa-home"></span></NavLink></li>
                <li><NavLink activeClassName="selected" to="/workflow"><span className="fas fa-bars"></span></NavLink></li>
                <li><NavLink activeClassName="selected" to="/projects"><span className="fas fa-chart-line"></span></NavLink></li>
                <li style={{position: 'relative'}}><NavLink activeClassName="selected" to="/chat"><span className="fas fa-envelope"></span>
                    <NewMsgNotification />
                </NavLink></li>
                <li><NavLink activeClassName="selected" to="/users"><span className="fas fa-users"></span></NavLink></li>
                <li><NavLink activeClassName="selected" to="/statistics"><span className="fas fa-hand-spock"></span></NavLink></li>
            </ul>
        </nav>
    )
};

export default LeftBar;