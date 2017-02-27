import React from "react";
import Search from "../components/Search";

export default class Home extends React.Component {
  render(){
    return (
      <div class="row">
        <div class="columns">
          <Search />
        </div>
      </div>
    );
  }
}
