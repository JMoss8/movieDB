import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import requestHandler from 'utils/requestHandler'

const Carousel = ({title, service, type}) => {
  const [movies, setMovies] = useState({loading: true})

  useEffect(() => {
    setMovies({loading: true})
    requestHandler(service).then(setMovies)
  }, [service])

  return (
    <div>
      <h2>{title}</h2>

      {movies.results ? (
        movies.results.map(movie => (
          <Link key={movie.id} to={`/detail/${type}/${movie.id}`}>
            {movie.title ?? movie.name}<br/>
          </Link>
        ))
      ) : movies.loading ? (
        'loading...'
      ) : (
        'error'
      )}
    </div>
  )
}

export default Carousel
