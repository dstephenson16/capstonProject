import React, { Component } from 'react';

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

        this.getRsvpData = this.getRsvpData.bind(this);
    }

    dataForms(items) {
        for (let ct=0; ct<items.length; ct++) {
            let form = items[ct]
            console.log(form)

            let container = document.createElement("DIV")
            container.className="kyle"

            let num_div = document.createElement("DIV")
            let num = document.createTextNode(ct + 1)
            num.className=`num_${ct}`
            num_div.appendChild(num)

            let first_name_div = document.createElement("DIV")
            let first_name_1b = document.createTextNode(`First Name: ${form[1]}`)
            first_name_div.appendChild(first_name_1b)

            let last_name_div = document.createElement("DIV")
            let last_name_1b = document.createTextNode(`Last Name: ${form[2]}`)
            last_name_div.appendChild(last_name_1b)

            let street_name_div = document.createElement("DIV")
            let street_name_1b = document.createTextNode(`Street Address: ${form[3]}`)
            street_name_div.appendChild(street_name_1b)

            let apt_number_div = document.createElement("DIV")
            let apt_number_1b = document.createTextNode(`Apt Number: ${form[4]}`)
            apt_number_div.appendChild(apt_number_1b)

            let city_name_div = document.createElement("DIV")
            let city_name_1b = document.createTextNode(`City: ${form[5]}`)
            city_name_div.appendChild(city_name_1b)

            let state_name_div = document.createElement("DIV")
            let state_name_1b = document.createTextNode(`State: ${form[6]}`)
            state_name_div.appendChild(state_name_1b)

            let postal_code_div = document.createElement("DIV")
            let postal_code_1b = document.createTextNode(`Zip Code: ${form[7]}`)
            postal_code_div.appendChild(postal_code_1b)

            let phone_number_div = document.createElement("DIV")
            let phone_number_1b = document.createTextNode(`Phone Number: ${form[8]}`)
            phone_number_div.appendChild(phone_number_1b)

            let email_div = document.createElement("DIV")
            let email_1b = document.createTextNode(`Email: ${form[9]}`)
            email_div.appendChild(email_1b)

            let partner_name_div = document.createElement("DIV")
            let partner_name_1b = document.createTextNode(`Partner Name/Plus One: ${form[10]}`)
            partner_name_div.appendChild(partner_name_1b)

            container.appendChild(num_div)

            container.appendChild(first_name_div)
            container.appendChild(last_name_div)
            container.appendChild(street_name_div)
            container.appendChild(apt_number_div)
            container.appendChild(city_name_div)
            container.appendChild(state_name_div)
            container.appendChild(postal_code_div)
            container.appendChild(phone_number_div)
            container.appendChild(email_div)
            container.appendChild(partner_name_div)

            let parent = document.getElementById("dami")
            parent.append(container)

        }
    }

    getRsvpData() {
        fetch(`https://dsweddingbackend.herokuapp.com/rsvp/admin/get`, {
                method: "GET",
                headers: { 'Content-Type': 'application/json'},
        }).then(response =>{
            response.json().then((body) => {
                console.log(body)
                this.setState({
                    response: body,
                })
                this.dataForms(body)
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    componentDidMount() {
        console.log("mounting component")
        this.getRsvpData();
    }

    render() {
        return (
            <div className='forms-container'>
                <div className="data-text">
                    DATA FROM FORMS:
                </div>

                <div className="forms" id="dami" />
            </div>
        )
    }
}
