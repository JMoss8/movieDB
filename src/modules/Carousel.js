import React from 'react'
import {Link} from 'react-router-dom'

const Carousel = ({title, items}) => (
  <div>
    <h2>{title}</h2>

    {items.results ? (
      items.results.map(item => (
        <Link key={item.id} to={`/detail/${item.media_type}/${item.id}`}>
          {item.title ?? item.name}<br/>
        </Link>
      ))
    ) : items.loading ? (
      'loading...'
    ) : (
      'error'
    )}
  </div>
)

export default Carousel
