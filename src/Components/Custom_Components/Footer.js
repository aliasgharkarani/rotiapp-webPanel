import React, { Component } from 'react';
import logo1 from '../../assets/logo1.png';
import Plant from '../../assets/plant.jpg';
import { Row, Col} from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <footer>
                {/* <Row>
                    <Col md={1} />
                    <Col md={10} style={{ background: "#37addb", borderBottom: "5px solid black", marginTop: "1%", height: '145px' }}>
                        <Col md={12} style={{ display: "flex", justifyContent: "center" }}><h3 style={{ color: "white" }}>Call us now</h3></Col>
                        <Col md={12} style={{ display: "flex", justifyContent: "center" }}><h3 style={{ color: "white" }}>+91-891-943-9603</h3></Col>
                    </Col>
                    <Col md={1} />
                </Row> */}

                <Row>
                    {/* <Col md={1} xs={0} sm={0}/> */}
                    <Col md={12} xs={12} sm={12} style={{ marginTop: "1%", paddingLeft: "0px" }}>
                        <Col md={12} xs={12} sm={12}>
                            <Col md={3} style={{ paddingLeft: "0px" }} xs={12} sm={12}>
                                <img src={logo1} alt="logo" style={{ height: "69px", width: "160px" }} />
                            </Col>
                            <Col style={{ display: "flex", alignItems: 'center', flexDirection: "column", height: "69px", justifyContent: "center" }} md={6}>
                                <Col style={{ color: "#f69a83", textShadow: "0.2px 0.2px" }}>©2018 RotiApp. All Rights Reserved. <span style={{ color: "#1fb1ce", textShadow: "0.5px 0.5px" }}>Privacy Policy</span><span style={{ color: '#ef471d', textShadow: "0.5px 0.5px" }}>Terms & Conditions.</span></Col>
                            </Col>
                            <Col md={3} style={{ display: "flex", alignItems: 'center', height: "69px", justifyContent: "center" }}>
                                Get Social
                                <img src={Plant} alt="Social-1" style={{ height: "28px", width: "28px" }} />
                                <img src={Plant} alt="Social-2" style={{ height: "28px", width: "28px" }} />
                                <img src={Plant} alt="Social-3" style={{ height: "28px", width: "28px" }} />
                                <img src={Plant} alt="Social-4" style={{ height: "28px", width: "28px" }} />
                                <img src={Plant} alt="Social-5" style={{ height: "28px", width: "28px" }} />
                                <img src={Plant} alt="Social-6" style={{ height: "28px", width: "28px" }} />
                            </Col>
                        </Col>
                    </Col>
                    {/* <Col md={1} sm={0} xs={0}/> */}
                </Row>
            </footer>
        );
    }
}
export default Footer;
