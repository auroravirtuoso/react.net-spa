import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavHeader extends Component {

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="nav-header navbar-header">
            <a className="navbar-brand" href="/">Home</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to='/members'>Members</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavHeader;