import React from 'react'

const Carousel = ({title, movies}) => {
  return (
    <div>
      <h2>{title}</h2>

      {movies.length}
    </div>
  )
}

export default Carousel
