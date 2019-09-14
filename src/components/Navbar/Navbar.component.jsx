import React from 'react';
import {Link} from "react-router-dom";

import './Navbar.styles.scss';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav-container">
        <Link to="/" className="nav-title">ExerTracker</Link>
        <div className="links-container">
          <ul className="link-list">
            <li className="">
              <Link to="/" className="link">Exercises</Link>
            </li>
            <li className="">
              <Link to="/create" className="link">Exercise Log</Link>
            </li>
            <li className="">
              <Link to="/user" className="link">Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

