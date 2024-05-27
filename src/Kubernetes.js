import React, { Component } from 'react';
import { Link } from 'react-router';

class Kubernetes extends Component {
  render(){
    return(
      <div>
        <h1>I am a Container Orchestration Tool!</h1>
          <ul>
            <li><Link to="/Four/123">Click Here!</Link></li>
            </ul>
            {this.props.children}
      </div>
    );
  }
}

export default Kubernetes;
