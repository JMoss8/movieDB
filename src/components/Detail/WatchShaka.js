import React, {useRef} from 'react'

import ShakaPlayer from 'modules/ShakaPlayer'

const WatchShaka = ({src}) => {
  const videoRef = useRef()
  const videoContainerRef = useRef()

  const watchMovie = _ => {
    if (videoRef.current) {
      videoRef.current.play()
      videoContainerRef.current.requestFullscreen()
        .catch(console.warn) // TODO fallback - "unhide" player on fullscreen error
      document.onfullscreenchange = _ => {
        if (document.fullscreenElement === null) { // pause the playback on exit
          videoRef.current.pause()
        }
      }
    }
  }

  return (
    <>
      <button onClick={watchMovie}>
        Watch Movie
      </button>

      <div style={{width: '0', height: '0', overflow: 'hidden'}}>
        <ShakaPlayer src={src} videoRef={videoRef} videoContainerRef={videoContainerRef}/>
      </div>
    </>
  )
}

export default WatchShaka
