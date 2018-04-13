import React from 'react';
import UsersList from './UsersList';
import './usersPage.css';

class UsersPage extends React.Component {
    render() {
        return (
            <section className='usersPage'>
                <UsersList/>
            </section>
        )
    }
}

export default UsersPage;