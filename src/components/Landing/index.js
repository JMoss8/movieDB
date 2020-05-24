import React, {useEffect, useState} from 'react'

import Carousel from './Carousel'

const Landing = () => {
  const [moviesAll, setMoviesAll] = useState(undefined)

  useEffect(() => {
    setMoviesAll(undefined)

    // request
    setMoviesAll([{
      title: 'Popular movies',
      movies: [],
    }, {
      title: 'Popular TV series',
      movies: [],
    }, {
      title: 'Family',
      movies: [],
    }, {
      title: 'Documentary',
      movies: [],
    }])
  }, [])

  return (
    <div>
      <h1>movieDB</h1>

      {moviesAll ? (
        moviesAll.map(moviesSet => <Carousel {...moviesSet}/>)
      ) : (
        'loading...'
      )}
    </div>
  )
}

export default Landing
