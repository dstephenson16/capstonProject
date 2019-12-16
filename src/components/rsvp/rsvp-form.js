import React, { Component } from 'react';

export default class Rsvp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: "",
            last_name: "",
            street_address: "",
            apt_number: "",
            city_name: "",
            state_name: "",
            postal_code: "",
            phone_number: "",
            email: "",
            partner_name: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch("http://127.0.0.1:5000/rsvp", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                street_address: this.state.street_address,
                apt_number: this.state.apt_number,
                city_name: this.state.city_name,
                state_name: this.state.state_name,
                postal_code: this.state.postal_code,
                phone_number: this.state.phone_number,
                email: this.state.email,
                partner_name: this.state.partner_name
            })
        })
        .then(request => request.json())
        .then(data => {
            if (data == "Rsvp Created") {
                this.getRsvpData()
            }
        })
        .catch(error => {
            console.log("rsvp for handlesubmit error", error)
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="rsvp-form-wrapper">
                <div className="rsvp-form">

                    <div className="text-wrapper">Please Fill Out</div>

                    <div className="two-column">
                        <input type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.handleChange} required/>
                        <input type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.handleChange} required/>
                    </div>

                    <div className="one-column">
                        <input type="text" name="street_address" placeholder="Street Address" value={this.state.street_address} onChange={this.handleChange} required/>
                    </div>

                    <div className="one-column">
                        <input type="text" name="apt_number" placeholder="Apt #, Floor, etc (Optional)" value={this.state.apt_number} onChange={this.handleChange} />
                    </div>

                    <div className="two-column">
                        <input type="text" name="city_name" placeholder="City" value={this.state.city_name} onChange={this.handleChange} required/>
                        <input type="text" name="state_name" placeholder="State" value={this.state.state_name} onChange={this.handleChange} required/>
                    </div>

                    <div className="one-column">
                        <input type="text" name="postal_code" placeholder="Zip Code" value={this.state.postal_code} onChange={this.handleChange} required/>
                    </div>

                    <div className="two-column">
                        <input type="text" name="phone_number" placeholder="Phone Number" value={this.state.phone_number} onChange={this.handleChange} required/>
                        <input type="email" name="email" placeholder="Email Address" value={this.state.email} onChange={this.handleChange} required/>
                    </div>

                    <div className="one-column">
                        <input type="text" name="partner_name" placeholder="Significant Other/Plus One (Optional)" value={this.state.partner_name} onChange={this.handleChange} />
                    </div>

                    <button className="btn" type="submit">Submit</button>
                </div>
            </form>
        )
    }
}