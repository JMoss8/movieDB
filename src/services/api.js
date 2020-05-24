const baseUrl = 'https://api.themoviedb.org/3/'
const api_key = process.env.REACT_APP_API_KEY

if (!api_key) alert('Please provide your key for MovieDB API as REACT_APP_API_KEY env variable.')

const paramsStringify = params => {
  const paramsApi = {api_key, ...params}

  let tmp = ''
  Object.keys(paramsApi)
    .filter(e => paramsApi[e])
    .forEach((e, i) => paramsApi[e] ? tmp = tmp + `${i ? '&' : '?'}${e}=${paramsApi[e]}` : i-- && '')
  return tmp
}

const api = {
  get: (path, params) => fetch(baseUrl + path + paramsStringify(params)),
  post: (path, body, params) => fetch(baseUrl + path + paramsStringify(params), {
    method: 'POST',
    body,
  }),
}

export default api
