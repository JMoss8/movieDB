import api from 'services/api'

const services = {
  discoverMovies: params =>
    () => api.get(`discover/movie`, params),
  discoverTvs: params =>
    () => api.get(`discover/tv`, params),
  getDetail: (type, id) =>
    () => api.get(`${type}/${id}`),
  search: params =>
    () => api.get(`search/multi`, params)
}

export default services
