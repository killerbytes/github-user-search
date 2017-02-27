import React from "react";
import { Link } from "react-router"


export default class Search extends React.Component {
  constructor(){
    super();

  }

  render(){
    const item = this.props.item;
    return (
      <div class="search-item">
        <div class="avatar">
          <img src={item.avatar_url} />
        </div>
        <div class="info">
          <strong>{item.login}</strong>
          <div>Score: {item.score}</div>
          <div>{item.html_url}</div>
        </div>
      </div>
    );
  }
}
