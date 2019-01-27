import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import history from './Components/Custom_Components/History';
import NotFound from './Components/Custom_Components/NotFound';
import Home from './Components/Home_Component/Home';
import Admin_Panel from './Components/Admin Panel/Admin_Panel'
import Admin_Panel_Entered from './Components/Admin_Panel_Entered/Admin_Panel_Entered'
import adminPanel_add_res from './Components/adminPanel_add_res/adminPanel_add_res'
import Admin_Panel_Entered_Get_Res from './Components/Get_Rest/index'
import Admin_Panel_Entered_Get_Orders_Del from './Components/Get_Orders_Del/index'
import Admin_Panel_Entered_Get_OrdersInP from './Components/Get_Orders_InP/index'
import Admin_Panel_Entered_Get_OrdersNew from './Components/Get_Orders_New/index'
import Orders from './Components/Orders/index'
// import About from './Components/About_Component/About';
// import Products from './Components/Products_Component/Product'
// import ContactUs from './Components/Contact_Component/ContactUs'

class Routers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authed: false,
        }
    }
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Home" component={Home} />
                        <Route exact path="/Admin_Panel" component={Admin_Panel} />
                        <Route exact path="/Admin_Panel_Entered" component={Admin_Panel_Entered} />
                        <Route exact path="/adminPanel_add_res" component={adminPanel_add_res} />                       
                        <Route exact path="/adminPanel_get_res" component={Admin_Panel_Entered_Get_Res} />
                        <Route exact path="/adminPanel_get_ordDel" component={Admin_Panel_Entered_Get_Orders_Del} />
                        <Route exact path="/adminPanel_get_ordInP" component={Admin_Panel_Entered_Get_OrdersInP} />
                        <Route exact path="/adminPanel_get_ordNew" component={Admin_Panel_Entered_Get_OrdersNew} />
                        <Route exact path="/orders" component={Orders} />
                        {/* <PrivateRoute authed={this.state.authed} path="/Main" component={Main} /> */}
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Router>
            </div >
        )

    }
}


export default Routers;