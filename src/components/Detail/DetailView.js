import React from 'react'

import WatchShaka from 'components/Detail/WatchShaka'

const DetailView = ({title, imgSrc, watchSrc}) => (
  <div>
    {title}
    <img src={'http://image.tmdb.org/t/p/w342/' + imgSrc} alt='Poster not found'/>

    {watchSrc && <WatchShaka src={watchSrc}/>}
  </div>
)

export default DetailView
