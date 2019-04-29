import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class History extends React.Component {
  render() {
    return (
      <div>
        <h1>- History -</h1>
        <h2>Our story</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/OOjs_UI_icon_history.svg/1024px-OOjs_UI_icon_history.svg.png"/>
        <Link to="/"> Back to homepage </Link>
      </div>
    )
  }
}