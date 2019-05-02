import { type } from "os";

let initialState = {
  results: [],
  active: {},
  cache:{
  }
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "GET":
      console.log("get called", payload.results);
      return {...state, results: payload.results };

    case "GETONE":
      console.log('setting state');
      return {...state, active: payload, cache: {...state.cache, [payload.url]: payload} };

    case "CACHE":
      console.log('fromcache', payload);
      return{...state, active: state.cache[payload]}
    default:
      return state;
  }
};
