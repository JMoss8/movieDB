import React, {useEffect, useState} from 'react'

import requestHandler from 'utils/requestHandler'
import Carousel from 'modules/Carousel'

const CarouselHandler = ({title, service, type}) => {
  const [movies, setMovies] = useState({loading: true})

  useEffect(() => {
    setMovies({loading: true})
    requestHandler(service).then(setMovies)
  }, [service])

  return (
    <Carousel title={title} items={movies} type={type ?? 'movie'}/>
  )
}

export default CarouselHandler
