//! httpRequestAxios.js
//! version : 1.0.2
//! authors : Gleisson Neves,
//! license : MIT

import * as axios from 'axios';

/**
 * Get resquest method
 *
 * @param { String } url Endpoint for resource
 * @param { Null, Function } callback Function to be performed on success
 * @return Object
 */
export function get(url, callback = null) {
    axios
      .get(url)
      .then((response) => {
          if (callback === null) {
            const resp = {
              data: response.data,
              code: response.status,
              message: response.statusText,
            }

            return resp;
          } else {
            return callback(response);
          }
      })
      .catch((error) => {
        if (error.response) {
          return {
            data: error.response.data,
            code: error.response.status,
            message: error.response.statusText,
          }
        } else {
          return {
              error: error.message,
          }
        }
      });
}

/**
 * Get request method with parameter passing
 *
 * @param { String } url Endpoint for resource
 * @param { Object } data Data passed by the request body
 * @param { Null, Function } callback Function to be performed on success
 * @return Object
 */
export function getParam(url, data, callback = null) {
    axios
      .get(url, {data})
      .then((response) => {
        if (callback === null) {
          const resp = {
            data: response.data,
            code: response.status,
            message: response.statusText,
          }

          return resp;
        } else {
          return callback(response);
        }
      })
      .catch((error) => {
        if (error.response) {
          return {
            data: error.response.data,
            code: error.response.status,
            message: error.response.statusText,
          }
        } else {
          return {
            error: error.message,
          }
        }
      });
}

/**
 * POST request method
 *
 * @param { String } url Endpoint for resource
 * @param { Object } data Data passed by the request body
 * @param { Null, Function } callback Function to be performed on success
 * @return Object
 */
export function post(url, data, callback = null) {
    axios
      .post(url, {data})
      .then((response) => {
        if (callback === null) {
          const resp = {
            data: response.data,
            code: response.status,
            message: response.statusText,
          }

          return resp;
        } else {
          return callback(response);
        }
      })
      .catch((error) => {
        if (error.response) {
          return {
            data: error.response.data,
            code: error.response.status,
            message: error.response.statusText,
          }
        } else {
          return {
            error: error.message,
          }
        }
      });
}
