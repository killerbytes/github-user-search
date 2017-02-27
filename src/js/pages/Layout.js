import React from "react"
import { Link } from "react-router"

import Nav from "../components/Nav";

export default class Layout extends React.Component {
  render(){
    return (
      <div>
        <header>
          <div class="top-bar">
            <div class="top-bar-left">
              <Link to="/">Github User Search</Link>
            </div>
            <div class="top-bar-right">
            </div>
          </div>
        </header>
        <div class="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
