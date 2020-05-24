import React, {useEffect, useState} from 'react'

import requestHandler from 'utils/requestHandler'

const Carousel = ({title, service}) => {
  const [movies, setMovies] = useState(undefined)

  useEffect(() => {
    requestHandler(service).then(setMovies)
  }, [service])

  return (
    <div>
      <h2>{title}</h2>

      {movies ? (
        movies.results.map(e => <>{e.title ?? e.name}<br/></>)
      ) : (
        'loading...'
      )}
    </div>
  )
}

export default Carousel
