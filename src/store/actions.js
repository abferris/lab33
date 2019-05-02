import * as utils from "../lib/utils.js";

export const getStuff = url => dispatch => {
  return utils.fetchData(url).then(records => {
    dispatch(runAsyncAction(records));
  });
};

export const getOne = url => dispatch => {
  return utils.fetchData(url).then( record => {
    dispatch(runAsyncActionTwo(record))
  })
}

export const fromCache = url => dispatch => {
  return dispatch(cacheAction(url));
}
const runAsyncActionTwo = payload => {
  console.log(payload)
  return{
    type: "GETONE",
    payload: payload
  }
}
const runAsyncAction = payload => {
  return {
    type: "GET",
    payload: payload
  };
};

const cacheAction = payload =>{
  return {
    type: "CACHE",
    payload: payload
  }
}