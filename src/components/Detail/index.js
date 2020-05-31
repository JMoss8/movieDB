import React, {useEffect, useState} from 'react'

import services from 'services'
import requestHandler from 'utils/requestHandler'
import DetailView from 'components/Detail/DetailView'

// const src = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'
// const src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
const src = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
// const src = 'https://storage.googleapis.com/shaka-demo-assets/angel-one-hls/hls.m3u8'

const Detail = ({match: {params: {type, id}}}) => {
  const [objectData, setObjectData] = useState({loading: true})

  useEffect(() => {
    setObjectData({loading: true})
    requestHandler(services.getDetail(type, id)).then(setObjectData)
  }, [id, type])

  return (
    <div>
      {objectData.id ? (
        type === 'movie' ? (
          <DetailView
            title={objectData.title}
            imgSrc={objectData.poster_path}
            watchSrc={src}
          />
        ) : type === 'tv' ? (
          <DetailView
            title={objectData.name}
            imgSrc={objectData.poster_path}
            watchSrc={src}
          />
        ) : type === 'person' ? (
          <DetailView
            title={objectData.name}
            imgSrc={objectData.profile_path}
          />
        ) : (
          'error'
        )
      ) : objectData.loading ? (
        'loading...'
      ) : (
        'error'
      )}
    </div>
  )
}

export default Detail
