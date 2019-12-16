import React, { Component } from 'react';

import RsvpForm from './rsvp-form';

export default class RsvpManager extends Component {
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
    }

    getRsvpData() {
        fetch("http://127.0.0.1:5000/rsvp/admin/get", {
            method: "GET"
        })
        .then(request => request.json())
        .then(data => {
            this.setState({
                first_name: data.first_name,
                last_name: data.last_name,
                street_address: data.street_address,
                apt_number: data.apt_number,
                city_name: data.city_name,
                state_name: data.state_name,
                postal_code: data.postal_code,
                phone_number: data.phone_number,
                email: data.email,
                partner_name: data.partner_name
            })
        })
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getRsvpData();
    }

    render() {
        return (
            <div className='rsvp-manager-wrapper'>
                <RsvpForm />
            </div>
        )
    }
}