//! httpRequestAxios.js
//! version : 1.0.2
//! authors : Gleisson Neves,
//! license : MIT
//! https://github.com/gleissonneves/httpRequestAxio/

import qs from 'qs'

import  { CONFIG_AXIOS } from './constants'

// trata os dados de envio por requisição
const dataProcessingByRequestMethod = (data)=> {
    return {
        post: qs.stringify(data),
        get: data || {},
        put: data,
        delete: data,
    }
}

// valida a compatibilidade do metodo com o que é aceitos pela abstração
const checkCompatibilityOfRequestVerbsHTTP = (method) => {
    const httpVerbs = {
        post: 'post',
        get: 'get',
        put: 'put',
        delete: 'delete',
    }

    if(httpVerbs[method]) {
        return httpVerbs[method]
    }

    throw new 'Invalid HTTP verb';
}

// configura o header do axios
function settingRequest(setting) {
    return {
        httpMethod: setting.method || 'get',
        data: setting.data || {},
        url: setting.url || '',
        timeout: setting.timeout || 5000
    }
}


function settingParamsByVerbHTTP() {
    // TODO: add verificações
    return { params: undefined }
}

function assign(previousValue) {
    const { method } = previousValue;
    const currentValue = settingParamsByVerbHTTP(method)
    const assignValue = Object.assign(previousValue, currentValue)

    if(method === 'get') {
        assignValue.params = assignValue.data
        delete assignValue.data
    } else {
        delete assignValue.params
    }

    return assignValue
}

export default function settingAxio(setting) {
    const { httpMethod, data, url, timeout } = settingRequest(setting)
    const method = checkCompatibilityOfRequestVerbsHTTP(httpMethod)
    const dataRequest = dataProcessingByRequestMethod(data)
    const mountDefaultVerbHTTP = {
        ...CONFIG_AXIOS,
        method: method,
        url: url,
        data: dataRequest[httpMethod],
        timeout: timeout,
    }

    return assign(mountDefaultVerbHTTP);
}
