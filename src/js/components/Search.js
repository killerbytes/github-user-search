import React from "react";
import { Link } from "react-router"
import {debounce} from "lodash";
import { connect } from "react-redux"

import SearchItem from "./search/SearchItem";

import * as UserActions from "../actions/UserActions";

@connect((store) => {
  return {
    users: store.users,
    loading: store.fetching
  };
})

export default class Search extends React.Component {
  constructor(){
    super();
    this.queryUser = debounce(this.queryUser, 500)
  }

  componentWillUnmount() {
    this.props.dispatch(UserActions.clearUsers())
  }

  queryUser(event){
    const value = event.target.value;

    if(value){
      this.props.dispatch(UserActions.query(value))
    }
  }

  onChange(event){
    event.persist();
    this.queryUser(event);
  }

  render(){
    const {users, loading} = this.props;

    const list = users.items.map(i=>{
      return <li key={i.id}>
      <Link to={`/user/${i.login}`}>
        <SearchItem item={i} />
      </Link>
      </li>
    })
    const isLoading = loading && <div class="loader"></div>

    return (
      <div class="search-bar">
        <input type="text"
          onChange={this.onChange.bind(this)}
          placeholder="Search..." />
        <ul className="no-bullet">
          {isLoading}
          {list}
        </ul>
      </div>
    );
  }
}
