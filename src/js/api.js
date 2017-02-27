import fetch from 'isomorphic-fetch';

let apiURL = "https://api.github.com";


function errorDispatcher(response){
	switch(response.status){
		case 401:
		    Dispatcher.dispatch({ type: "ERROR_UNAUTHORIZED" });
		    break;
		case 404:
		    Dispatcher.dispatch({ type: "ERROR_NOT_FOUND" });
			break;
		case 419:
		    Dispatcher.dispatch({ type: "ERROR_TOKEN_EXPIRED" });
			break;
		default:
			//do nothing
			return response.json();
	}

}

let client_id = '13be6d59c325d795e2b5';
let client_secret = '47cb7f3e73690bda69690f5f6f6a52e9fc15eb35'
let limit = `?client_id=${client_id}&client_secret=${client_secret}`;
// let limit = '';

const API = {
	fetch: (url) => {
		return fetch( url + limit, {
		}).then(function(response){
			return errorDispatcher(response);
		});
	},
	get: (url) => {
		return fetch(apiURL + url + limit, {
		}).then(function(response){
			return errorDispatcher(response);
		});
	}
}

export default API;
