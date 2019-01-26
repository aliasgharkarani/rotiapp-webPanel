import React, { Component } from 'react';
import pic from '../../assets/pic.png';
import SFALL from '../../assets/SolutionforAll.png';
import Flexible from '../../assets/flexible.png';
import Sequrity from '../../assets/security.png';
import Smart from '../../assets/smart.png';
import Secure from '../../assets/secure.png';
import Fast from '../../assets/fast.png';
import Sales from '../../assets/sales.jpg';
import Inventory from '../../assets/inventory.jpg';
import Purchase from '../../assets/purchse.jpg';
import Plant from '../../assets/plant.jpg';
import Quality from '../../assets/quality.jpg';
import Production from '../../assets/production.jpg';
import Assets from '../../assets/asset-management.jpg';
import Finance from '../../assets/finance.jpg';
import HumanResourse from '../../assets/hrms.jpg';
import { Carousel, Row, Col, Panel } from 'react-bootstrap'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Custom_Components/Header.js'
import Footer from '../Custom_Components/Footer';
import './home.css'

class Home extends Component {
  componentDidMount() {
    window.onscroll = () => { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

  }
  render() {
    const whyRotiApp = [
      { pic: SFALL, heading: "Solutions for All", para: "At RotiApp, we are aware that creating client-oriented software takes a mixture of technical excellence and clear communication and our firm hires the perfect match to ensure you receive both. We know that every client is unique and we strive to deliver an individual, innovative and affordable proposal every time and to follow it through with an outstanding delivery which is both on time and within budget" },
      { pic: Flexible, heading: "Flexibility", para: "There is either no software for your business operations or there are a number of soft-wares that your organization is using for managing different operations.You don't have easy access to information about your business.Accounting Takes Longer and Is More Difficult.Sales and the Customer Experience Are Suffering. Your IT Is Too Complex and Time-Consuming" },
      { pic: Sequrity, heading: "Security", para: "We will work interactively with you and gather all of the information required to know your requirements and work-flow.Design the wireframes and the mockups for the system and get it approved from the management.Program the new software with appropriate functionality and test it to see if everything is working fine in your premises..Communicate the new work flow to the management and train the staff ." },
      { pic: Smart, heading: "Smart and Adaptable", para: "Leverage intelligent ERP with built-in machine learning, predictive analytics, and optimized processes. Keep the latest innovations at your fingertips with automatic updates" },
      { pic: Fast, heading: "Fast and Affordable", para: "Tap into Sure Link world class cloud infrastructure to run lean and flexible business processes. Get up and running quickly anywhere in the world for a low monthly & yearly cost." },
      { pic: Secure, heading: "Secure and Reliable", para: "Our cloud based ERP software solutions have covered from system security to compliance. Your data is hosted on world-class servers with global teams dedicated to its safety." }
    ]
    const ImportantModules = [
      { pic: Sales, heading: "Sales & Marketing", para: "Whether you have 2 or 2000 employees, Sure Link has a comprehensive portfolio of leading cloud based ERP software solutions and tools to fit your needs. We also provide dedicated support teams that are at your disposal 24/7" },
      { pic: Inventory, heading: "Inventory Management", para: "Whether you have 2 or 2000 employees, Sure Link has a comprehensive portfolio of leading cloud based ERP software solutions and tools to fit your needs. We also provide dedicated support teams that are at your disposal 24/7" },
      { pic: Purchase, heading: "Purchase Management", para: "Whether you have 2 or 2000 employees, Sure Link has a comprehensive portfolio of leading cloud based ERP software solutions and tools to fit your needs. We also provide dedicated support teams that are at your disposal 24/7" },
      { pic: Plant, heading: "Plant Maintanance", para: "Leverage intelligent ERP with built-in machine learning, predictive analytics, and optimized processes. Keep the latest innovations at your fingertips with automatic updates" },
      { pic: Quality, heading: "Quality Control", para: "Tap into Sure Link world class cloud infrastructure to run lean and flexible business processes. Get up and running quickly anywhere in the world for a low monthly & yearly cost." },
      { pic: Production, heading: "Production Management", para: "Our cloud based ERP software solutions have covered from system security to compliance. Your data is hosted on world-class servers with global teams dedicated to its safety." },
      { pic: Assets, heading: "Assets Management", para: "Whether you have 2 or 2000 employees, Sure Link has a comprehensive portfolio of leading cloud based ERP software solutions and tools to fit your needs. We also provide dedicated support teams that are at your disposal 24/7" },
      { pic: Finance, heading: "Fianance", para: "Leverage intelligent ERP with built-in machine learning, predictive analytics, and optimized processes. Keep the latest innovations at your fingertips with automatic updates" },
      { pic: HumanResourse, heading: "Human Resourse", para: "Whether you have 2 or 2000 employees, Sure Link has a comprehensive portfolio of leading cloud based ERP software solutions and tools to fit your needs. We also provide dedicated support teams that are at your disposal 24/7" }
    ]
    return (
      <div className="parent-home">
        <Header/>
          <Row>
            <Col md={12} sm={12} xs={12}>
              <Carousel>
                <Carousel.Item>
                  <img width={300} height={300} alt="900x500" src={pic} />
                  <Carousel.Caption>
                    <h3>Package 1</h3>
                    <p>it contains .................</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={300} height={300} alt="900x500" src={pic} />
                  <Carousel.Caption>
                    <h3>Package 2</h3>
                    <p>it contains .................</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={300} height={300} alt="900x500" src={pic} />
                  <Carousel.Caption>
                    <h3>Package 3</h3>
                    <p>it contains .................</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>

          <Row style={{ marginTop: "3%" }}>
            <Col md={1} xs={0} sm={0} />
            <Col md={3} xs={12} sm={12} >
              <Panel className="panel1">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">20 years of Experience</Panel.Title>
                </Panel.Heading>
                <Panel.Body>Panel content</Panel.Body>
              </Panel>
            </Col>
            <Col md={4} xs={12} sm={12} >
              <Panel className="panel2">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">200+ Clients</Panel.Title>
                </Panel.Heading>
                <Panel.Body>Panel content</Panel.Body>
              </Panel>
            </Col>
            <Col md={3} xs={12} sm={12} >
              <Panel className="panel3">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">1000+ Users</Panel.Title>
                </Panel.Heading>
                <Panel.Body>Panel content</Panel.Body>
              </Panel>
            </Col>
          </Row>
          <div>
            <Col md={12} className="WhyRotiApp"><h3>Why RotiApp?</h3></Col>
            {whyRotiApp.map((obj, i) => {
              return (
                <Col md={4} className="whyRotiApp-values">
                  <img src={obj.pic} alt="collection" />
                  <h4>{obj.heading}</h4>
                  <p>{obj.para}</p>
                </Col>
              )
            })}
          </div>
          <div>
            <Row>
              <Col md={1} sm={1} xs={1} />
              <Col md={4} sm={11} xs={11} className="video-link">
                <iframe title="YoutubeIntroLink" src="https://www.youtube.com/embed/xV_Bc5a8u60" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Col>
              <Col md={6} sm={11} xs={11} className="change-think-erp">
                <div>
                  <h4>
                    We change the way you think about ERP!
             </h4>
                  <p>
                    See how our Sure Link software uses intelligent technologies like digital assistants, AI and machine learning, and predictive analytics – to deliver instant, future proof value.
            </p>
                </div>
              </Col>
              <Col md={1} />
            </Row>
          </div>
          <div>
            <Col md={12} className="important-modules"><h3>Important Modules</h3></Col>
            {ImportantModules.map((obj, i) => {
              return (
                <Col md={4} className="important-modules-details">
                  <img src={obj.pic} alt="collection" />
                  <h4>{obj.heading}</h4>
                  <p>{obj.para}</p>
                </Col>
              )
            })}
            <Col md={12} className="other-modules"><h3>Other Modules</h3></Col>
            <Col md={12} className="other-modules-details"><h5>Job work, Dynamic Costing..............</h5></Col>
          </div>
          <Col md={12} className="sure-link-erp-features-row">
            <Col md={12} className="sure-link-erp-features"><h3>RotiApp Features</h3></Col>
            <Col md={6} className="sure-link-erp-features-left-right">
              <h4>Web Based and Cloud Computing</h4>
              <h4>Dynamic Dash Board with a GUI</h4>
              <h4>Inbuilt Email & SMS Integration</h4>
              <h4>Multi Language</h4>
              <h4>Unlimited Data Storage</h4>
            </Col>
            <Col md={6} className="sure-link-erp-features-left-right">
              <h4>Mobile and Tab Compatibility</h4>
              <h4>Unlimited Users</h4>
              <h4>Auto Back-up Facility</h4>
              <h4>Flexible Software</h4>
              <h4>Lifetime Product, No Renewals</h4>
            </Col>
            <Col md={12} className="other-features-slc"><h4>+Other Awesome Features in RotiApp Communication</h4></Col>
          </Col>
          <Footer />
        </div>
    );
  }
}
export default Home;
