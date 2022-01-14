
import qs from 'qs'


// trata os dados de envio por requisição
const dataProcessingByRequestMethod = (data)=> {
  return {
    post: qs.stringify(data),
    get: data || {},
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

  return httpVerbs[method] || 'requisition method not accepted'
}

function configAxio({httpMethod = 'get', data = {}, url, timeout = 1000}) {
  const compatibilityOfRequestMethods = checkCompatibilityOfRequestMethods(httpMethod)
  const dataProcessingMethod = dataProcessingByRequestMethod(data),

  /* return {
    method: compatibilityOfRequestMethods[setting.httpMethod],
    url: setting.url,
    data: dataProcessingMethod[setting.httpMethod],
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    timeout: setting.timeout,
  } */
}