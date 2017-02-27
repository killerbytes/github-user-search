const initialState = {
    repos: [],
    user: null,
    users: { items: []},
    fetching: false,
    fetched: false,
    error: null
  }
export default function reducer(state=initialState, action) {

    switch (action.type) {
      case "CLEAR_USERS": {
        return {...state, fetching: false, users: {items: []}}
      }
      case "RECEIVE_USER": {
        return {...state, fetching: false, user: action.payload }
      }
      case "RECEIVE_USERS": {
        return {...state, fetching: false, users: action.payload}
      }
      case "RECEIVE_DATA": {
        return {...state, fetching: false, repos: action.payload}
      }
      case "LOADING_START": {
        return {...state, fetching: true}
      }
      case "LOADING_FINISH": {
        return {...state, fetching: false}
      }
    }

    return state
}
