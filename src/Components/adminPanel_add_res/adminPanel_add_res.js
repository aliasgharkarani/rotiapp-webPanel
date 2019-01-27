import React, { Component } from 'react';
import Header from '../Custom_Components/Header.js'
import Footer from '../Custom_Components/Footer';
import {Button, FormControl } from 'react-bootstrap';
class adminPanel_add_res extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            restaurantname: "",
            firstname: "",
            lastname: "",
            yourtitle: "",
            phoneno: "",
            Password: "",
            id: ""
        };
    }
    ADD() {
        alert("Add Method");
        // let payload = {
        //     "CurrentlyOfferDelivery": true,
        //     "location": "Karachi,Pakistan",
        //     "zipcode": "786",
        //     "ApprovedAccount": true,
        //     "email": "ali@hotmail.com",
        //     "noOflocations": "5",
        //     "typeOfCuisine": "Pakistani 787878",
        //     "EstimatedWeeklyOrder": "14",
        //     "restaurantname": `${this.state.restaurantname}`,
        //     "firstname": `${this.state.firstname}`,
        //     "lastname": `${this.state.lastname}`,
        //     "yourtitle": `${this.state.yourtitle}`,
        //     "phoneno": `${this.state.phoneno}`,
        //     "Password": `${this.state.Password}`
        // }
        // fetch(`https://rotiappp.herokuapp.com/api/restaurants`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(payload)
        // }).then(function (response) {
        //     return response.json();
        // }).then(data => alert("ADDED")
        // ).catch(error => alert(error));
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
                    placeholder="Enter text"
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
                <Button onClick={() => this.ADD()}>ADD</Button>


                <Footer />
            </div>
        );
    }
}
export default adminPanel_add_res;