//! httpRequestAxios.js
//! version : 1.0.2
//! authors : Gleisson Neves,
//! license : MIT

import * as axios from "axios";
import settingAxios from "./helper/config.axios";

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.resolve(error.response);
  }
);

/**
 * POST request method
 *
 * @param { String } url required - Endpoint for resource
 * @param { Object } data - required Data passed by the request body
 * @param { Function } callback Function to be performed on success
 * @return Object
 */
const post = (url, data) => {
  const configParams = {
    url: url,
    data: data,
    httpVerb: "post",
  };

  return axios(settingAxios(configParams))
  .then((response) => ({ data: response.data, status: response.status }))
    .catch((error) => {
      if (error.response) {
        return {
          data: error.response.data,
          code: error.response.status,
          message: error.response.statusText,
        };
      } else {
        return {
          error: error.message,
        };
      }
    });
}

/**
 * Get resquest method
 *
 * @param { String } url Endpoint for resource
 * @param { Object } params Date for request, defout null
 * @param { Function } callback Function to be performed on success
 * @return Object
 */
 const get = (url, params = null) => {
  const configParams = {
    url: url,
    data: params,
  };

  return axios(settingAxios(configParams))
    .then((response) => ({ data: response.data, status: response.status }))
    .catch((error) => {
      if (error.response) {
        return {
          data: error.response.data,
          code: error.response.status,
          message: error.response.statusText,
        };
      } else {
        return {
          error: error.message,
        };
      }
    });
}

/**
 * 
 * @param { Object } params 
 * @param { Function } callback 
 * @param { Int } timeout 
 */
const request = (params, callback, timeout = 10000) => {
  const configParams = {
    method: params.verb || 'get',
    url: params.endpoint,
    data: params.data,
    timeout: timeout,
  };

  return axios(settingAxios(configParams))
  .then(res => callback({ data: res.data, status: res.status }, err = {}))
  .catch(err => callback({}, { code: err.response.status, message: err.response.statusText }))
}

export { post, get, request };
