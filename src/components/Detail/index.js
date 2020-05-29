import React, {useEffect, useState} from 'react'

import services from 'services'
import requestHandler from 'utils/requestHandler'

const Detail = ({match: {params: {type, id}}}) => {
  const [movieData, setMovieData] = useState({loading: true})

  useEffect(() => {
    setMovieData({loading: true})
    requestHandler(services[type === 'movie' ? 'getMovie' : 'getTv'](id)).then(setMovieData)
  }, [id, type])

  return (
    <div>
      {movieData.id ? (
        <div>
          {movieData.title ?? movieData.name}
          <img src={'http://image.tmdb.org/t/p/w342/' + movieData.poster_path} alt='Poster not found'/>
        </div>
      ) : movieData.loading ? (
        'loading...'
      ) : (
        'error'
      )}
    </div>
  )
}

export default Detail
