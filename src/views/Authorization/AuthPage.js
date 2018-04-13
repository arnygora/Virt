import React from 'react';
import { Route, Redirect} from "react-router-dom";
// import EnterBtn from '../../atoms/EnterButton';

import './AuthPage.css'

class AuthPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loading: true
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('user- ', this.state.username, 'pass- ', this.state.password);

        let data = {
            login: this.state.username.trim(),
            pass: this.state.password.trim()
        };
        fetch('/api/user', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                if (res.check === "exist" ) {
                    localStorage.setItem('check', true);
                    localStorage.setItem("user", JSON.stringify(this.state.username));

                    console.log(res);
                }
                this.setState({
                    loading: false,
                    check: false,
                })
            });
    };
    handleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    };
    render() {
        const {component: Component, ...rest} = this.props;
        return (
            <div className="registerWrapper">
                <Route {...rest} render={(matchProps) => {
                    if (this.state.loading) {
                        return <div className='InputData'>login/pass = admin</div>
                    }
                    if (this.state.check) {
                        return <Component />
                    } else {
                        return <Redirect to="./" />
                    }
                }} />
                <div className="wrapForm">
                    <form onSubmit={this.handleSubmit}>
                        <span className="far fa-user fa-2x">
                            <input name='username'
                                   value={this.state.username}
                                   onChange={this.handleChange}  type="text"
                                   placeholder="Username" required />
                        </span>
                        <span className="fas fa-lock fa-2x">
                            <input name='password'
                                   value={this.state.password}
                                   onChange={this.handleChange}  type="text"
                                   placeholder="Password" maxLength="12" required />
                        </span>
                        <button type='submit'>Enter</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AuthPage;