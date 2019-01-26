import React, { Component } from 'react';
import { Col, FormGroup, FormControl, Button } from 'react-bootstrap'
import Header from '../Custom_Components/Header.js'
import Footer from '../Custom_Components/Footer';
import './Admin_Panel.css'
import * as firebase from 'firebase'

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
        this.Login = this.Login.bind(this);
        this.SignUp = this.SignUp.bind(this);
        this.state = {
            value: '',
            name: "",
            email: "",
            password: "",
            name1: "",
            email1: "",
            password1: "",
            data: []
            // auth:false
        };
    }
    componentWillMount() {
        firebase.database().ref(`Admin_Panel`).on('value', (snapshot) => {
            var data = snapshot.val();

            var array = [];
            for (let keys in data) {
                array.push(data[keys])
            }
            this.setState({ data: array })
        });
    }
    SignUp() {
        let user = {
            name: this.state.name,
            email: this.state.email,
            Password: this.state.password,
            auth: false
        }
        firebase.auth().createUserWithEmailAndPassword(user.email, user.Password)
            .then((studentcreatedUser) => {
                firebase.database().ref(`Admin_Panel/${firebase.auth().currentUser.uid}`).set(user)
                alert("Wait for your Account Authentication");
                this.setState({
                    name: "",
                    email: "",
                    password: ""
                })
            }).catch(
                (Error) => { alert(Error.message) }
            )
    }
    Login() {
        let data = this.state.data;
        let flag = false;
        for (let i = 0; i < data.length; i++) {
            if (this.state.email1 === data[i].email && this.state.password1 === data[i].Password && data[i].auth === true) {
                console.log("U can Login");
                this.setState({
                    name: "",
                    email: "",
                    password: ""
                })
                this.props.history.push('/Admin_Panel_Entered')
                flag = true;
            }
        }
        if (!flag) {
            alert("Sorry U cant Login");
        }
    }
    ResetPassword() {
        firebase.auth().sendPasswordResetEmail('aliasgharkarani125@hotmail.com').then(function () {
            alert("Email sent");
        }).catch(function (error) {
            alert("An error happened");
        })
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div className="parent-home">
                <Header />
                <Col md={2} sm={0} xs={0} />
                <Col md={4} sm={10} xs={10} style={{ textAlign: "center" }}>
                    <div>
                        <FormGroup
                        // controlId="formBasicText"
                        >
                            <FormControl
                                style={{ width: "80%", marginTop: "3%", height: "45px" }}
                                type="text"
                                name="name"
                                value={this.state.name}
                                required
                                placeholder="Name"
                                onChange={this.handleChange}
                            />
                            <FormControl
                                style={{ width: "80%", marginTop: "3%", height: "45px" }}
                                type="text"
                                name="email"
                                value={this.state.email}
                                required
                                placeholder="Email"
                                onChange={this.handleChange}
                            />
                            <FormControl
                                style={{ width: "80%", marginTop: "3%", height: "45px" }}
                                type="password"
                                name="password"
                                value={this.state.password}
                                required
                                placeholder="*********"
                                onChange={this.handleChange}
                            />
                            <Button onClick={this.SignUp} style={{ marginTop: "3%", width: "130px", height: "40px", color: "#ffff", fontWeight: "bold", background: "#01a2ca" }}>SignUp</Button>
                        </FormGroup>
                    </div>
                </Col>
                <Col md={4} sm={10} xs={10} style={{ textAlign: "center" }}>
                    <div>
                        <FormGroup
                        // controlId="formBasicText"
                        >
                            <FormControl
                                style={{ width: "80%", marginTop: "3%", height: "45px" }}
                                type="text"
                                name="name1"
                                value={this.state.name1}
                                required
                                placeholder="Name"
                                onChange={this.handleChange}
                            />
                            <FormControl
                                style={{ width: "80%", marginTop: "3%", height: "45px" }}
                                type="text"
                                name="email1"
                                value={this.state.email1}
                                required
                                placeholder="Email"
                                onChange={this.handleChange}
                            />
                            <FormControl
                                style={{ width: "80%", marginTop: "3%", height: "45px" }}
                                type="password"
                                name="password1"
                                value={this.state.password1}
                                required
                                placeholder="*********"
                                onChange={this.handleChange}
                            />
                            <Button onClick={this.Login} style={{ marginTop: "3%", width: "130px", height: "40px", color: "#ffff", fontWeight: "bold", background: "#01a2ca" }}>Login</Button>
                            <p onClick={this.ResetPassword}>Forget Password</p>
                        </FormGroup>
                    </div>
                </Col>
                <Col md={2} sm={0} xs={0} />
                <Footer />
            </div>
        );
    }
}
export default Home;
