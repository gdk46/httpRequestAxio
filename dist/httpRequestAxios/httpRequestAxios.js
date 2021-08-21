import * as axios from 'axios';
import { getMessageStatusCode } from '../../libs/helpers/verifyCodeHttp';

/**
 * Get method
 *
 * @param string url Endpoint for resource
 * @param null|function callback Function to be performed on success
 */
export function get(url, callback = null) {
    axios
        .get(url)
        .then((response) => {
            return callback == null ? response : callback(response);
        })
        .catch((error) => {
            if (error.response) {
                return {
                    data: error.response.data,
                    code: error.response.status,
                    message: getMessageStatusCode(error.response.status),
                    statusText: error.response.statusText,
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
 * @param string url Endpoint for resource
 * @param object|string data Data passed by the request body
 * @param null|function callback Function to be performed on successs
 */
export function getParam(url, data, callback = null) {
    axios
        .get(url, {data})
        .then((response) => {
            return callback == null ? response : callback(response);
        })
        .catch((error) => {
            if (error.response) {
                return {
                    data: error.response.data,
                    code: error.response.status,
                    message: getMessageStatusCode(error.response.status),
                    statusText: error.response.statusText,
                }
            } else {
                return {
                    error: error.message,
                }
            }
        });
}