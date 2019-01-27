import React, { Component } from 'react';
import Header from '../Custom_Components/Header.js'
import Footer from '../Custom_Components/Footer';
import { Button, FormControl } from 'react-bootstrap';
class adminPanel_add_res extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            restaurantname: "",
            firstname: "",
            lastname: "",
            yourtitle: "",
            phoneno: "",
            Password: "",
            CurrentlyOfferDelivery: false,
            location: "",
            zipcode: "",
            ApprovedAccount: true,
            email: "",
            noOflocations: "",
            typeOfCuisine: "",
            EstimatedWeeklyOrder: "",
        };
    }
    ADD() {
        let payload = {
            "CurrentlyOfferDelivery": `${this.state.CurrentlyOfferDelivery}`,
            "location": `${this.state.location}`,
            "zipcode": `${this.state.zipcode}`,
            "ApprovedAccount": `${this.state.ApprovedAccount}`,
            "email": `${this.state.email}`,
            "noOflocations": `${this.state.noOflocations}`,
            "typeOfCuisine": `${this.state.typeOfCuisine}`,
            "EstimatedWeeklyOrder": `${this.state.EstimatedWeeklyOrder}`,
            "restaurantname": `${this.state.restaurantname}`,
            "firstname": `${this.state.firstname}`,
            "lastname": `${this.state.lastname}`,
            "yourtitle": `${this.state.yourtitle}`,
            "phoneno": `${this.state.phoneno}`,
            "Password": `${this.state.Password}`
        }
        fetch(`https://rotiappp.herokuapp.com/api/restaurants`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        }).then(function (response) {
            return response.json();
        }).then(data => this.setState({
            restaurantname: "",
            firstname: "",
            lastname: "",
            yourtitle: "",
            phoneno: "",
            Password: "",
            CurrentlyOfferDelivery: false,
            location: "",
            zipcode: "",
            ApprovedAccount: true,
            email: "",
            noOflocations: "",
            typeOfCuisine: "",
            EstimatedWeeklyOrder: ""
        })
        ).catch(error => alert(error));
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div className="parent-home">
                <Header />
                <h1 style={{ textAlign: "center" }}>Add Restaurant</h1>
                <FormControl
                    type="text"
                    value={this.state.restaurantname}
                    name="restaurantname"
                    placeholder="Restaurantname"
                    onChange={this.handleChange}
                />
                <FormControl
                    type="text"
                    value={this.state.firstname}
                    name="firstname"
                    placeholder="firstname"
                    onChange={this.handleChange}
                />
                <FormControl
                    type="text"
                    value={this.state.lastname}
                    name="lastname"
                    placeholder="lastname"
                    onChange={this.handleChange}
                />
                <FormControl
                    type="text"
                    value={this.state.yourtitle}
                    name="yourtitle"
                    placeholder="yourtitle"
                    onChange={this.handleChange}
                />
                <FormControl
                    type="text"
                    value={this.state.phoneno}
                    name="phoneno"
                    placeholder="phoneno"
                    onChange={this.handleChange}
                />
                <FormControl
                    type="text"
                    value={this.state.Password}
                    name="Password"
                    placeholder="Password"
                    onChange={this.handleChange}
                />
                <FormControl
                    type="text"
                    value={this.state.CurrentlyOfferDelivery}
                    name="CurrentlyOfferDelivery"
                    placeholder="CurrentlyOfferDelivery"
                    onChange={this.handleChange}
                />
                <FormControl
                    type="text"
                    value={this.state.location}
                    name="location"
                    placeholder="location"
                    onChange={this.handleChange}
                />
                <FormControl
                    type="text"
                    value={this.state.zipcode}
                    name="zipcode"
                    placeholder="zipcode"
                    onChange={this.handleChange}
                />
                <FormControl
                    type="text"
                    value={this.state.ApprovedAccount}
                    name="ApprovedAccount"
                    placeholder="ApprovedAccount"
                    onChange={this.handleChange}
                />
                <FormControl
                    type="text"
                    value={this.state.email}
                    name="email"
                    placeholder="email"
                    onChange={this.handleChange}
                />
                <FormControl
                    type="text"
                    value={this.state.noOflocations}
                    name="noOflocations"
                    placeholder="noOflocations"
                    onChange={this.handleChange}
                />
                <FormControl
                    type="text"
                    value={this.state.typeOfCuisine}
                    name="typeOfCuisine"
                    placeholder="typeOfCuisine"
                    onChange={this.handleChange}
                />
                <FormControl
                    type="text"
                    value={this.state.EstimatedWeeklyOrder}
                    name="EstimatedWeeklyOrder"
                    placeholder="EstimatedWeeklyOrder"
                    onChange={this.handleChange}
                />
                <Button onClick={() => this.ADD()}>ADD</Button>
                <Footer />
            </div>
        );
    }
}
export default adminPanel_add_res;