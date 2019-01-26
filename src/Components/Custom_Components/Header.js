import React, { Component } from 'react';
import logo1 from '../../assets/logo1.png';
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Row id="myHeader" style={{ height: "60px", background: "#f8f8f8", borderBottom: "1px solid #e6dbdb", borderRadius: "40px" }}>
        <Col md={1} xs={0} sm={0} />
        <Col md={3} xs={12} sm={12} style={{ height: "60px", display: "flex", justifyContent: "center" }} >
          <img src={logo1} alt="logo" style={{ height: "41px", width: "90px", alignSelf: "center" }} />
        </Col>
        <Col md={8} xs={12} sm={12} style={{ height: "60px", display: "flex", justifyContent: "flex-end" }}>
          <Col md={2} xs={2} sm={2} style={{ alignSelf: 'center' }}>
            <Link to="/home">Home</Link>
          </Col>
          <Col md={2} xs={3} sm={3} style={{ alignSelf: 'center' }}>
            <Link to="/about">About</Link>
          </Col>
          <Col md={2} xs={3} sm={3} style={{ alignSelf: 'center' }}>
            <Link to="/contactus">Contact Us
                        </Link>
          </Col>
          <Col md={2} xs={4} sm={4} style={{ alignSelf: 'center' }}>
            <Link to="/Admin_Panel">Admin Panel
                      </Link>
          </Col>
        </Col>
      </Row>
    );
  }
}
export default Header;
