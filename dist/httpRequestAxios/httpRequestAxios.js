import * as axios from 'axios';
import { getMessageStatusCode } from '../../libs/helpers/verifyCodeHttp';

/**
 * Get request method
 *
 * @param string url
 * @param function callback Function to be performed on success
 */
export function requestGet(url, callback) {
    axios
        .get(url)
        .then((response) => {
            return callback(response);
        })
        .catch((error) => {
            if (error.response) {
                return {
                    data: error.response.data,
                    code: error.response.status,
                    message: getMessageStatusCode(error.response.status),
                    statusText: error.response.statusText,
                }
            }else {
                return {
                    error: error.message,
                }
            }
        });
}

/**
 * método de requisição get com passagem de parâmetros
 * 
 * @param string url 
 * @param object|string data
 * @param function callback Function to be performed on successs
 */
export function requestGetWithParam(url, data, callback) {
    axios
        .get(url, data)
        .then((response) => {
            return callback(response);
        })
        .catch((error) => {
            if (error.response) {
                return {
                    data: error.response.data,
                    code: error.response.status,
                    message: getMessageStatusCode(error.response.status),
                    statusText: error.response.statusText,
                }
            }else {
                return {
                    error: error.message,
                }
            }
        });
}