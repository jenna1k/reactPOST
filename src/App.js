import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import "./App.css";
import Clock from './Clock'
import Next from './Next'

class App extends Component {
  render() {
        return (
          <BrowserRouter>
            <div>
              <NavLink exact to="/" activeClassName="selected" activeStyle={{color: "red"}}> Home </NavLink>
              <NavLink to="/Next" activeClassName="selected" activeStyle={{color: "red"}}> Next </NavLink>

              <Switch>
                <Route exact path="/" component={Clock} />
                <Route path="/Next" component={Next} />
              </Switch>
            </div>
        </BrowserRouter>
        );
    }
}

export default App;