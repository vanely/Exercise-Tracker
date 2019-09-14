import React from 'react';
import {Link} from "react-router-dom";

import 'Navbar.styles.scss';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">ExerTracker</Link>
        <div className="">
          <ul className="">
            <li>
              <Link to=""></Link>
            </li>
            <li>
              <Link to=""></Link>
            </li>
            <li>
              <Link to=""></Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

