import React, {useEffect, useState} from 'react'

import services from 'services'
import requestHandler from 'utils/requestHandler'

const Detail = ({match: {params: {type, id}}}) => {
  const [movieData, setMovieData] = useState(undefined)

  useEffect(() => {
    setMovieData(undefined)
    requestHandler(services[type === 'movie' ? 'getMovie' : 'getTv'](id)).then(setMovieData)
  }, [id, type])

  return (
    <div>
      {movieData ? (
        <div>
          {movieData.title ?? movieData.name}
          <img src={'http://image.tmdb.org/t/p/w342/' + movieData.poster_path} alt='Poster not found'/>
        </div>
      ) : (
        'loading...'
      )}
    </div>
  )
}

export default Detail
