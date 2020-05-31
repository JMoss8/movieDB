import React from 'react'
import {Link} from 'react-router-dom'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const Carousel = ({title, items}) => (
  <div>
    <h2>{title}</h2>

    {items.results ? (
      <AliceCarousel
        mouseTrackingEnabled
        dotsDisabled
        responsive={{0: {items: 5}}}
      >
        {items.results.map(item => (
          <Link key={item.id} to={`/detail/${item.media_type}/${item.id}`}>
            {item.title ?? item.name}<br/>
          </Link>
        ))}
      </AliceCarousel>
    ) : items.loading ? (
      'loading...'
    ) : (
      'error'
    )}
  </div>
)

export default Carousel
