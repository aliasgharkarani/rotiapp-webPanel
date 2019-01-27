import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import Header from '../Custom_Components/Header.js'
import Footer from '../Custom_Components/Footer';
import './Admin_Panel_Entered.css'
import { Link } from "react-router-dom";

class Admin_Panel_Entered extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: '',
            name: "",
            email: "",
            password: "",
            name1: "",
            email1: "",
            password1: "",
            data1: []
        };
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div className="parent-home">
                <Header />
                <Col md={12} style={{ display: 'flex', justifyContent: 'center', color: "blue" }}><h1>Restaurant</h1> </Col>
                <Col md={1} sm={0} xs={0} />
                <Col md={10}>
                    <Col md={4} sm={10} xs={10} className="res-box">
                        <Link to="/adminPanel_add_res" style={{ fontSize: 30, color: "brown" }}>Add Restaurants
                        </Link>
                    </Col>
                    <Col md={4} sm={10} xs={10} className="res-box">
                        <Link to="/adminPanel_get_res" style={{ fontSize: 30, color: "brown" }}>Manage Restaurants
                        </Link>
                    </Col>
                    <Col md={4} sm={10} xs={10} className="res-box">
                        <Link to="/orders" style={{ fontSize: 30, color: "brown" }}>Manage Orders
                        </Link>
                    </Col>
                </Col>
                <Col md={1} sm={0} xs={0} />
                <Footer />
            </div>
        );
    }
}
export default Admin_Panel_Entered;