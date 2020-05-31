import React from 'react'

import services from 'services'
import CarouselHandler from './CarouselHandler'

const moviesCarousels = [{
  title: 'Popular movies',
  service: services.discoverMovies({sort_by: 'popularity.desc'}),
}, {
  type: 'tv',
  title: 'Popular series',
  service: services.discoverTvs({sort_by: 'popularity.desc'}),
}, {
  title: 'Family',
  service: services.discoverMovies({sort_by: 'popularity.desc', with_genres: '10751'}),
}, {
  title: 'Documentary',
  service: services.discoverMovies({sort_by: 'popularity.desc', with_genres: '99'}),
}]

const Landing = () => (
  <div>
    <h1>movieDB</h1>

    {moviesCarousels.map(moviesSet => <CarouselHandler key={moviesSet.title} {...moviesSet}/>)}
  </div>
)

export default Landing
