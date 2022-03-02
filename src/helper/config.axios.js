//! httpRequestAxios.js
//! version : 1.0.2
//! authors : Gleisson Neves,
//! license : MIT
//! https://github.com/gleissonneves/httpRequestAxio/

import qs from "qs";

/**
 * Handles the return data per request
 *
 * @param { Object } data return data
 * @returns { Object }
 */
const dataProcessingByRequestMethod = (data) => {
  return {
    post: qs.stringify(data),
    get: data || {},
    put: data,
    delete: data,
  };
};

/**
 * valid the compatibility of the verb passed
 * with what is accepted by the abstraction
 *
 * @param { String } verb verb http
 * @returns { String }
 */
const checkCompatibilityOfRequestVerbsHTTP = (verb) => {
  const httpVerbs = {
    post: "post",
    get: "get",
    put: "put",
    delete: "delete",
  };

  if (httpVerbs[verb]) {
    return httpVerbs[verb];
  }

  throw new "Invalid HTTP verb"();
};

/**
 * configure basic data basic header
 *
 * @param { Object } setting user defined settings
 * @return { Object }
 */
const configureDataHeader = (setting) => {
  return {
    httpVerb: setting.method
      ? checkCompatibilityOfRequestVerbsHTTP(setting.method)
      : "get",
    data: setting.data || {},
    url: setting.url || "",
    timeout: setting.timeout || 10000,
  };
};

/**
 *
 * @params {}
 * @return { Object }
 */
const settingParamsByVerbHTTP = (object) => {
  if (object.method === "get") {
    object.params = object.data;
    delete object.data;
    return object;
  }

  delete object.params;
  return object;
};

/**
 *
 * @params {}
 * @return { Object }
 */
const assign = (previousValue) => {
  const currentValue = Object.assign(previousValue, { params: undefined });
  return settingParamsByVerbHTTP(currentValue);
};

/**
 * Configure a basic header
 *
 * @params { Object } setting
 * @return { Object }
 */
const settingAxio = (setting) => {
  const { httpVerb, data, url, timeout } = configureDataHeader(setting);
  const dataRequest = dataProcessingByRequestMethod(data);

  return assign({
    headers: { "X-Requested-With": "XMLHttpRequest" },
    method: httpVerb,
    url: url,
    data: dataRequest[httpVerb],
    timeout: timeout,
  });
};

export default settingAxio;
