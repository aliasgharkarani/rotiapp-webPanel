import React, { Component } from 'react';
import { Col} from 'react-bootstrap'
import Header from '../Custom_Components/Header.js'
import Footer from '../Custom_Components/Footer';
import '../Admin_Panel_Entered/Admin_Panel_Entered.css'
import { Link } from "react-router-dom";
// import './Admin_Panel_Entered.css'

class Orders extends Component {
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
                <Col md={12} style={{ display: 'flex', justifyContent: 'center', color: "blue" }}><h1>Orders</h1> </Col>
                <Col md={1} sm={0} xs={0} />
                <Col md={10}>
                    <Col md={4} sm={10} xs={10} className="res-box">
                        <Link
                            to="/adminPanel_get_ordNew"
                            New Orders
                            style={{ fontSize: 30, color: "brown" }}>New Orders
                            </Link>
                    </Col>
                    <Col md={4} sm={10} xs={10} className="res-box">
                        <Link
                            to="/adminPanel_get_ordInP"
                            style={{ fontSize: 30, color: "brown" }}>In Process
                        </Link>
                    </Col>
                    <Col md={4} sm={10} xs={10} className="res-box">
                        <Link to="/adminPanel_get_ordDel" 
                        style={{ fontSize: 30, color: "brown" }}>Delivered
                        </Link>
                    </Col>
                </Col>
                <Col md={1} sm={0} xs={0} />
                <Footer />
            </div>
        );
    }
}
export default Orders;