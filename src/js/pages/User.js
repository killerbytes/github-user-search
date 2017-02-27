import React from "react";
import { connect } from "react-redux"

import * as UserActions from "../actions/UserActions";
import Repos from "../components/Repos";
import { formatDate } from "../utils";


@connect((store) => {
  return {
    user: store.user,
    loading: store.fetching,
    repos: store.repos
  };
})

export default class User extends React.Component {
  componentDidMount(){
    const {params} = this.props;
    this.props.dispatch(UserActions.fetchUser(params.username))
  }

  componentDidUpdate(prevProps){
    const {params} = this.props
    if(prevProps.params.username !== params.username){
      this.props.dispatch(UserActions.fetchUser(params.username))
    }
  }

  componentWillReceiveProps(nextProps){
    const {user} = this.props;
    if(this.props.user !== nextProps.user){
      this.getRepos( nextProps.user.repos_url )
    }
  }

  getRepos(url){
    this.props.dispatch(UserActions.fetchUrl(url))
  }

  render(){
    const {user, repos, loading} = this.props;
    const isLoading = loading && <div class="loader"></div>
    if(!user) return false;

  return (
    <div>
      {isLoading}
      <div class="row user">
        <div class="column medium-4">
          <div class="avatar">
            <img src={user.avatar_url} />
          </div>
        </div>
        <div class="column medium-8">
          <div class="info">
            <h2><a href={user.html_url}>{user.name}</a>  <small>(<a href={user.url}>{user.login}</a>)</small> <span class="float-right"><small>{user.location}</small></span></h2>
            <div class="row">
              <div class="columns">
                {user.company && <h4>{user.company}</h4>}
              </div>
            </div>
            {user.bio && <p>{user.bio}</p>}
            {user.blog && <div><a href={user.blog}>{user.blog}</a></div>}
            <a href={"mailto:"+user.email}>{user.email}</a>
            { user.gravatar_id && <div>Gravatar Id {user.gravatar_id}</div> }
          </div>
          <div class="summary callout">
            <div class="row">
              <div class="columns medium-6">
                Id: <span class="float-right">{user.id}</span>
              </div>
              <div class="columns medium-6">
                Hireable: <span class="float-right"> {user.hireable ? 'Yes' : 'No'}</span>
              </div>
            </div>
            <div class="row">
              <div class="columns medium-6">
                <div>Type: <span class="float-right">{user.type}</span></div>
                <div>Site Admin: <span class="float-right">{user.site_admin}</span></div>
              </div>
              <div class="columns medium-6">
                <div>Created:  <span class="float-right">{ formatDate(user.created_at) }</span></div>
                <div>Updated: <span class="float-right">{ formatDate(user.updated_at)} </span></div>
              </div>
            </div>
          </div>
          <div class="summary callout text-center">
            <div class="row">
              <div class="columns medium-3 small-3">
                <p>Followers:</p>
                <div class="stat"><a href={user.followers_url}>{user.followers}</a></div>
              </div>
              <div class="columns medium-3 small-3">
                <p>Following:</p>
                <div class="stat"><a href={user.following_url}>{user.following}</a></div>
              </div>
              <div class="columns medium-3 small-3">
                <p>Repos:</p>
                <div class="stat"><a href={user.repos_url}>{user.public_repos}</a></div>
              </div>
              <div class="columns medium-3 small-3">
                <p>Gists:</p>
                <div class="stat"><a href={user.gists_url}>{user.public_gists}</a></div>
              </div>
            </div>
          </div>
          <div class="row column">
            <ul class="list-inline">
              <li><a href={user.starred_url}>Starred</a></li>
              <li><a href={user.subscriptions_url}>Subscriptions</a></li>
              <li><a href={user.organizations_url}>Organizations</a></li>
              <li><a href={user.events_url}>Events</a></li>
              <li><a href={user.received_events_url}>Received Events</a></li>
            </ul>
          </div>

        </div>
      </div>



  <div class="row">
    <Repos items={repos} />
  </div>


</div>

);
}
}
