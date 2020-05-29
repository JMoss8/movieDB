import React, {useEffect, useState} from 'react'

import services from 'services'
import requestHandler from 'utils/requestHandler'
import ShakaPlayer from 'components/Detail/ShakaPlayer'

// const src = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'
// const src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
const src = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
// const src = 'https://storage.googleapis.com/shaka-demo-assets/angel-one-hls/hls.m3u8'

const Detail = ({match: {params: {type, id}}}) => {
  const [movieData, setMovieData] = useState({loading: true})

  useEffect(() => {
    setMovieData({loading: true})
    requestHandler(services[type === 'movie' ? 'getMovie' : 'getTv'](id)).then(setMovieData)
  }, [id, type])

  const watchMovie = _ => {

  }

  return (
    <div>
      {movieData.id ? (
        <div>
          {movieData.title ?? movieData.name}
          <img src={'http://image.tmdb.org/t/p/w342/' + movieData.poster_path} alt='Poster not found'/>

          <button onClick={watchMovie}>Watch Movie</button>

          <ShakaPlayer src={src}/>
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
