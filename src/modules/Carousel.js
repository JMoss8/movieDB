import React from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import CarouselItem from 'modules/CarouselItem'

const CarouselContainer = styled.div`
  margin: 0 -.5em;
`

const responsive = (() => { // generate valid JSON for AliceCarousel to make it responsive
  const result = {0: {items: 1}}
  for (let i = 0; i < 7; i++) result[(i + 2) * 148] = {items: i + 2}
  return result
})()

const Carousel = ({title, items, type}) => (
  <div>
    <h2>{title}</h2>

    {items && items.results ? (
      <CarouselContainer>
        <AliceCarousel
          items={items.results.map(item => <CarouselItem key={item.id} item={item} type={type}/>)}
          responsive={responsive}
          infinite={false}
          dotsDisabled
        />
      </CarouselContainer>
    ) : items.loading ? (
      'loading...'
    ) : (
      'error'
    )}
  </div>
)

export default Carousel
