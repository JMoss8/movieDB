import api from 'services/api'

const services = {
  getMovies: params =>
    () => api.get(`discover/movie`, params)
}

export default services
