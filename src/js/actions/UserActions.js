import api from "../api";

export function clearUsers(id){
  return function(dispatch){
    dispatch({ type: "CLEAR_USERS" });
  }
}

export function fetchUser(id){
  return function(dispatch){
    dispatch({ type: "LOADING_START" });
    api.get("/users/"+ id).then(res=>{
      dispatch({type: "RECEIVE_USER", payload: res});
      dispatch({ type: "LOADING_FINISH" });
    })
  }
}

export function query(q){
  return function(dispatch){
    dispatch({ type: "LOADING_START" });
    api.get("/search/users?q="+ q).then(res=>{
      dispatch({type: "RECEIVE_USERS", payload: res});
      dispatch({ type: "LOADING_FINISH" });
    })

  }
}

export function fetchUrl(url){
  return function(dispatch){
    dispatch({ type: "LOADING_START" });
    api.fetch(url).then(res=>{
      dispatch({type: "RECEIVE_DATA", payload: res});
      dispatch({ type: "LOADING_FINISH" });
    })

  }
}
