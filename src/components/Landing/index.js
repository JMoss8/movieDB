import React from 'react'

import services from 'services'
import Carousel from './Carousel'

const moviesCarousels = [{
  type: 'movie',
  title: 'Popular movies',
  service: services.discoverMovies({sort_by: 'popularity.desc'}),
}, {
  type: 'series',
  title: 'Popular TV series',
  service: services.discoverTvs({sort_by: 'popularity.desc'}),
}, {
  type: 'movie',
  title: 'Family',
  service: services.discoverMovies({sort_by: 'popularity.desc', with_genres: '10751'}),
}, {
  type: 'movie',
  title: 'Documentary',
  service: services.discoverMovies({sort_by: 'popularity.desc', with_genres: '99'}),
}]

const Landing = () => (
  <div>
    <h1>movieDB</h1>

    {moviesCarousels.map(moviesSet => <Carousel key={moviesSet.title} {...moviesSet}/>)}
  </div>
)

export default Landing
