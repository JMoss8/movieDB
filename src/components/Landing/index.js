import React from 'react'

import services from 'services'
import Carousel from './Carousel'

const moviesAll = [{
  title: 'Popular movies',
  service: services.getMovies({sort_by: 'popularity.desc'}),
}, {
  title: 'Popular TV series',
  service: services.getTv({sort_by: 'popularity.desc'}),
}, {
  title: 'Family',
  service: services.getMovies({sort_by: 'popularity.desc', with_genres: '10751'}),
}, {
  title: 'Documentary',
  service: services.getMovies({sort_by: 'popularity.desc', with_genres: '99'}),
}]

const Landing = () => (
  <div>
    <h1>movieDB</h1>

    {moviesAll.map((moviesSet, i) => <Carousel key={"moviesSet" + i} {...moviesSet}/>)}
  </div>
)

export default Landing
