import React, { Component } from 'react';
import Header from '../Custom_Components/Header.js'
import Footer from '../Custom_Components/Footer';
import { Row, Table, Modal, Button, FormControl } from 'react-bootstrap';
class Admin_Panel_Entered_Get_OrdersInP extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleHide = this.handleHide.bind(this);
        this.Get = this.Get.bind(this);
        this.state = {
            smShow: false,
            lgShow: false,
            resArray: [],
            datacmg: {}
        };
    }
    componentDidMount() {
        this.Get();
    }
    Get() {
        fetch('https://rotiappp.herokuapp.com/api/orders/In Process', {
            method: "GET"
        }).then(function (response) {
            return response.json();
        }).then(data => {
            this.setState({
                resArray: data
            })
        }
        ).catch(error => console.log(error));
    }
    Delivered(idd) {
        let payload = {
            "Cancel": false,
            "SNo": `${idd.SNo}`,
            "OrderStatus": "Delivered",
            "OrderData": `${idd.OrderData}`,
            "OrderNo": `${idd.OrderNo}`,
            "OrderDetails": `${idd.OrderDetails}`,
            "OrderRestaurant": `${idd.OrderRestaurant}`
        }
        fetch(`https://rotiappp.herokuapp.com/api/orders/${idd._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        }).then(function (response) {
            return response.json();
        }).then(data => alert("Delivered")
        ).catch(error => alert(error));
    }
    Update(dt) {
        this.setState({ datacmg: dt, lgShow: true })
        // setTimeout(() => {
        // this.setState({ lgShow: true })
        // }, 3000)
    }
    handleHide() {
        this.setState({ show: false });
    }
    render() {
        let lgClose = () => this.setState({ lgShow: false });
        return (
            <div className="parent-home">
                <Header />
                <h1 style={{ textAlign: "center" }}>InProcess Orders</h1>
                <Row>
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Order  Data</th>
                                <th>Order Details</th>
                                <th>Order Restaurant</th>
                                <th>Delivered</th>
                                {/* <th>Delete</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.resArray.map((data, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{data.OrderData}</td>
                                            <td>{data.OrderDetails}</td>
                                            <td>{data.OrderRestaurant}</td>
                                            <td><button onClick={() => this.Delivered(data)}>Delivered</button></td>
                                            {/* <td><button onClick={() => this.Delete(data._id)}>Delete</button></td> */}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Row>
                <MyLargeModal show={this.state.lgShow} datasending={this.state.datacmg} onHide={lgClose} />
                <Footer />
            </div>
        );
    }
}
export default Admin_Panel_Entered_Get_OrdersInP;

class MyLargeModal extends React.Component {
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
            id: ""
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            restaurantname: nextProps.datasending.restaurantname,
            firstname: nextProps.datasending.firstname,
            lastname: nextProps.datasending.lastname,
            yourtitle: nextProps.datasending.yourtitle,
            phoneno: nextProps.datasending.phoneno,
            Password: nextProps.datasending.Password,
            id: nextProps.datasending._id
        })
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    UPDATE() {
        let payload = {
            "CurrentlyOfferDelivery": true,
            "location": "Karachi,Pakistan",
            "zipcode": "786",
            "ApprovedAccount": true,
            "email": "ali@hotmail.com",
            "noOflocations": "5",
            "typeOfCuisine": "Pakistani 787878",
            "EstimatedWeeklyOrder": "14",
            "restaurantname": `${this.state.restaurantname}`,
            "firstname": `${this.state.firstname}`,
            "lastname": `${this.state.lastname}`,
            "yourtitle": `${this.state.yourtitle}`,
            "phoneno": `${this.state.phoneno}`,
            "Password": `${this.state.Password}`
        }
        fetch(`https://rotiappp.herokuapp.com/api/restaurants/${this.state.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        }).then(function (response) {
            return response.json();
        }).then(data => alert("Updated")
        ).catch(error => alert(error));
    }
    render() {
        return (
            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Master Kitchen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                    <Button onClick={() => this.UPDATE()}>Update</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}  