import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            errorText: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        });
    }

    handleLogin() {
        event.preventDefault();
        fetch("http://127.0.0.1:5000/auth/verify", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(request => {return request.json()})
        .then(data => {
            if (data == "User validated" ) {
                this.props.handleSuccessfulAuth();
            } else {
                this.setState({
                    errorText: "Wrong email or password"
                });
                this.props.handleUnsuccessfulAuth;
            }
        })
        .catch(error => {
            console.log(error)
            this.setState({
                errorText: "An error has occurred"
            });
        })
    }

    render() {
        return (
            <div className='login-wrapper'>
                
                <div className="login-text">
                    LOGIN TO ACCESS 
                </div>

                <form onSubmit={this.handleLogin}>
                    <div className="login-input">
                        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                    </div>

                    <div className="login-input">
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div className="login-btn">
                        <button type="submit">Login</button>
                    </div>

                </form>

                <div>{this.state.errorText}</div>
            </div>
        )
    }
}