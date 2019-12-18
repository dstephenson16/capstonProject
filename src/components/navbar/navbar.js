import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

import Countdown from './countdown';

const NavbarComponent = props => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="navbar-link-wrapper">
                <NavLink to={route} activeClassName="navbar-active">
                    {linkText}
                </NavLink>
            </div>
        )
    }

    const handleSignOut = () => {
         props.history.push("/");
         props.handleSuccessfulLogout();
     }

    return (
        <div className="navbar-wrapper">
            <div className="rsvp-data-link">
                {props.loggedInStatus === true ? (
                    dynamicLink("/rsvp-admin", "Rsvp Data")
                ) : null }
            </div>

            <div className="home-link">
                <div className="navbar-link-wrapper">
                    <NavLink exact to="/" activeClassName="navbar-active">
                        Home
                    </NavLink>
                </div>
            </div>

            <div className="middle">
                <div className="middle-name">
                    Damiana & Russell
                </div>

                <div className="middle-date">
                    June 17 || Provo, UT
                </div>

                <div className="middle-countdown">
                    <Countdown timeTillDate="06 17 2020, 3:00 pm" timeFormat="MM DD YYYY, h:mm a" />
                </div>
            </div>

            <div className="rsvp-link">
                <div className="navbar-link-wrapper">
                    <NavLink to="/rsvp-form" activeClassName="navbar-active">
                        Rsvp
                    </NavLink>
                </div>
            </div>

            {/* <div className="navbar-link-wrapper"> */}
                {props.loggedInStatus === true ? (
                    <button type="button" className="sign-out-btn" onClick={handleSignOut}>Logout</button>
                ) : null }
            {/* </div> */}
        </div>
    )
}

export default withRouter(NavbarComponent);