import api from 'services/api'

const services = {
  getMovies: params =>
    () => api.get(`discover/movie`, params),
  getTv: params =>
    () => api.get(`discover/tv`, params),
}

export default services
