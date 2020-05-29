import React, {useEffect, useRef} from 'react'
import shaka from 'shaka-player'
import muxjs from 'mux.js'

const initApp = (videoRef, manifestUri) => {
  // Install built-in polyfills to patch browser incompatibilities.
  shaka.polyfill.installAll()

  // Check to see if the browser supports the basic APIs Shaka needs.
  if (shaka.Player.isBrowserSupported()) {
    // Everything looks good!
    initPlayer(videoRef, manifestUri)
  } else {
    // This browser does not have the minimum set of APIs we need.
    console.error('Browser not supported!')
  }
}

const initPlayer = (videoRef, manifestUri) => {
  // noinspection JSConstantReassignment TODO
  window.muxjs = muxjs

  // Create a Player instance.
  const video = videoRef.current
  const player = new shaka.Player(video)

  // Listen for error events.
  player.addEventListener('error', onErrorEvent)

  // Try to load a manifest.
  // This is an asynchronous process.
  player.load(manifestUri).then(function () {
    // This runs if the asynchronous load is successful.
    console.log('The video has now been loaded!')
  }).catch(onError)  // onError is executed if the asynchronous load fails.
}

function onErrorEvent(event) {
  // Extract the shaka.util.Error object from the event.
  onError(event.detail)
}

function onError(error) {
  // Log the error.
  console.error('Error code', error.code, 'object', error)
}

const ShakaPlayer = ({src, autoPlay = true, controls = true}) => {
  const videoRef = useRef()

  useEffect(() => initApp(videoRef, src), [src])

  return (
    <video
      ref={videoRef}
      width='640'
      poster='//shaka-player-demo.appspot.com/assets/poster.jpg'
      autoPlay={autoPlay}
      controls={controls}
    />
  )
}

export default ShakaPlayer
