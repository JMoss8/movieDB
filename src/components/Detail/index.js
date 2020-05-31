import React, {useEffect, useState} from 'react'

import services from 'services'
import getImgSrc from 'utils/getImgSrc'
import requestHandler from 'utils/requestHandler'
import DetailView from 'components/Detail/DetailView'
import RenderMeta from 'components/Detail/RenderMeta'

// const src = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'
// const src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
const src = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
// const src = 'https://storage.googleapis.com/shaka-demo-assets/angel-one-hls/hls.m3u8'

const Detail = ({match: {params: {type, id}}}) => {
  const [object, setObject] = useState({loading: true})

  useEffect(() => {
    setObject({loading: true})
    requestHandler(services.getDetail(type, id)).then(setObject)
  }, [id, type])

  return (
    object.id ? (
      <DetailView
        title={object.title ?? object.name}
        tagline={object.tagline ?? object.known_for_department}
        description={object.overview ?? object.biography}
        meta={RenderMeta(object)}
        imgSrc={getImgSrc(object)}
        watchSrc={(type === 'movie' || type === 'tv') ? src : undefined}
      />
    ) : object.loading ? (
      'loading...'
    ) : (
      'error'
    )
  )
}

export default Detail
