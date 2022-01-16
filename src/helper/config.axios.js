import qs from 'qs'


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
const checkCompatibilityOfRequestMethods = (method) => {
  const httpVerbs = {
    post: 'post',
    get: 'get',
    put: 'put',
    delete: 'delete',
  }

  if(httpVerbs[method]) {
    return httpVerbs[method]
  }

  throw new 'Invalid  HTTP method'
}

// configura o header do axios
function settingRequest(setting) {
  return {
    httpMethod: setting.method || 'get',
    data: setting.data || {},
    url: setting.url || '',
    timeout: setting.timeout || 1000
  }
}


export default function settingAxio(setting) {
  const { httpMethod, data, url, timeout } = settingRequest(setting) 
  const method = checkCompatibilityOfRequestMethods(httpMethod)
  const dataRequest = dataProcessingByRequestMethod(data)

  return {
    method: method,
    url: url,
    data: dataRequest[httpMethod],
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    timeout: timeout,
  }
}