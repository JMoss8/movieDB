import React, {useEffect} from 'react'
import shaka from 'shaka-player/dist/shaka-player.ui'
import 'shaka-player/dist/controls.css'
import muxjs from 'mux.js'

const initApp = (videoRef, videoContainerRef, manifestUri) => {
  // Install built-in polyfills to patch browser incompatibilities.
  shaka.polyfill.installAll()

  // Check to see if the browser supports the basic APIs Shaka needs.
  if (shaka.Player.isBrowserSupported()) {
    // Everything looks good!
    initPlayer(videoRef, videoContainerRef, manifestUri)
  } else {
    // This browser does not have the minimum set of APIs we need.
    console.error('Browser not supported!')
  }
}

const initPlayer = (videoRef, videoContainerRef, manifestUri) => {
  // noinspection JSConstantReassignment TODO
  window.muxjs = muxjs

  // Create a Player instance.
  const video = videoRef.current
  const player = new shaka.Player(video)

  const controlPanelElements = ['time_and_duration', 'spacer', 'mute', 'volume', 'fullscreen', 'overflow_menu']
  const ui = new shaka.ui.Overlay(player, videoContainerRef.current, video)
  ui.configure({controlPanelElements})

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

const ShakaPlayer = ({src, videoRef, videoContainerRef, autoPlay}) => {
  useEffect(() => initApp(videoRef, videoContainerRef, src), [src, videoContainerRef, videoRef])

  return (
    <div ref={videoContainerRef}>
      <video
        ref={videoRef}
        poster='//shaka-player-demo.appspot.com/assets/poster.jpg'
        autoPlay={autoPlay}
        controls={false}
        style={{width: '100vw', height: '100vh'}}
      />
    </div>
  )
}

export default ShakaPlayer
