import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import getImgSrc from 'utils/getImgSrc'

const ItemLink = styled(Link)`
  display: block;
  padding: .5em;
  height: 12.375em;
  color: white;
  text-align: center;
  text-decoration: none;
`
const ItemContent = styled.div`
  height: 100%;
  background: #ddd url("${props => props.imgUrl}") no-repeat center;
  background-size: cover;
`
const ItemOverlay = styled.div`
  display: flex;
  height: calc(100% - 1em);
  padding: .5em;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, .375);
  opacity: 0;
  transition: opacity .4s ease;
  
  ${ItemLink}:hover & {
    opacity: 1;
  }
`

const CarouselItem = ({item, type}) => (
  <ItemLink to={`/detail/${item.media_type ?? type}/${item.id}`}>
    <ItemContent imgUrl={getImgSrc(item)}>
      <ItemOverlay>
        {item.title ?? item.name}
      </ItemOverlay>
    </ItemContent>
  </ItemLink>
)

export default CarouselItem
