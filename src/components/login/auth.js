import React, { Component } from 'react';

import Login from './login';
import usAndLobo from '../../../static/images/usAndLobo.jpg';

export default class Auth extends Component {
    constructor(props) {
        super(props)

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push("/");
    }

    handleUnsuccessfulAuth() {
        this.props.handleUnsuccessfulLogin();
    }

    render() {
        return (
            <div className='auth-wrapper'>
                <div 
                    className="left-column"
                        style={{
                            backgroundImage: `url(${usAndLobo})`
                    }}
                />
                
                <div className="right-column">
                    <Login 
                        handleSuccessfulAuth={this.handleSuccessfulAuth}
                        handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
                    />
                </div>

            </div>
        );
    }
}