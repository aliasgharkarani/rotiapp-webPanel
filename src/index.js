import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as firebase from 'firebase'
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './Route';
import * as serviceWorker from './serviceWorker';

var config = {
    apiKey: "AIzaSyD8xOKoyu0AGHHStP3RKBh33oM-YfRtfu0",
    authDomain: "rotiapprestaurant.firebaseapp.com",
    databaseURL: "https://rotiapprestaurant.firebaseio.com",
    projectId: "rotiapprestaurant",
    storageBucket: "rotiapprestaurant.appspot.com",
    messagingSenderId: "932549255217"
  };
  firebase.initializeApp(config);

ReactDOM.render(<Router><div><Routers /></div></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();