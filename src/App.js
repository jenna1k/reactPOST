import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import "./App.css";
import Home from './Home';
import History from './History';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <div>
                <NavLink exact to="/" activeClassName="selected" activeStyle={{color: "red"}}> Home </NavLink>
                <NavLink to="/our-history" activeClassName="selected" activeStyle={{color: "red"}}> History </NavLink>

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/our-history" component={History} />
                </Switch>
              </div>
            </BrowserRouter>
        );
    }
}

export default App;