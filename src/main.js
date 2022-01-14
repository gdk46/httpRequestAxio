//! httpRequestAxios.js
//! version : 1.0.2
//! authors : Gleisson Neves,
//! license : MIT

import * as axios from 'axios';
import config from './helper/config.axios'

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

/**
 * POST request method
 *
 * @param { String } url required - Endpoint for resource
 * @param { Object } data - required Data passed by the request body
 * @param { Function } callback Function to be performed on success
 * @return Object
 */
function post(url, data) {
  const configParams = {
    url:url,
    data: data,
    httpMethod: 'post'
  }

  return axios(config.configAxio(configParams))
  .then((response) => response)
}


/**
 * Get resquest method
 *
 * @param { String } url Endpoint for resource
 * @param { Object } params Date for request, defout null
 * @param { Function } callback Function to be performed on success
 * @return Object
 */
function get(url, params = null) {
  const configParams = {
    url: url,
    data: data,
  }

  console.log(config.configAxio(configParams));

  /* return axios(config.configAxio(configParams))
  .then((response) => response)
  .catch((err) => {
    console.log(err);
  }) */
}

export {
  post,
  get
}