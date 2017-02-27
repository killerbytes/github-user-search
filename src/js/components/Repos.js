import React from "react"

import { formatDate } from "../utils";

export default class Repos extends React.Component {
  render(){
    const repos = this.props.items.map(i=>{
      return <li key={i.id}>
        <strong><a href={i.html_url}>{i.name}</a></strong><small class="float-right"> Updated on { formatDate(i.updated_at)}</small>
        <p>{i.language}    </p>
        {i.description && <p>{i.description}</p>}
      </li>
    })
    return (
      <ul class="no-bullet repo-list">
        { repos }
      </ul>
    );
  }
}
