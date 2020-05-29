import api from 'services/api'

const services = {
  discoverMovies: params =>
    () => api.get(`discover/movie`, params),
  discoverTvs: params =>
    () => api.get(`discover/tv`, params),
  getMovie: id =>
    () => api.get(`movie/${id}`),
  getTv: id =>
    () => api.get(`tv/${id}`),
}

export default services
