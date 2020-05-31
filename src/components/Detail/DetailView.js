import React from 'react'
import styled from 'styled-components'

import WatchShaka from 'components/Detail/WatchShaka'

const DetailContainer = styled.div`
  display: flex;
  align-items: center;

  & > * {
    width: 50%;
    
    img {
      display: block;
      max-width: 90%;
      margin: 3em auto;
    }
  }

  @media only screen and (max-width: 768px) {
    display: block;
    
    & > * {  
      width: 100%;
    }
  }
`

const DetailView = ({title, tagline, description, meta, imgSrc, watchSrc}) => (
  <DetailContainer>
    <div>
      <h2>{title}</h2>
      <i>{tagline}</i>
      <p>{description}</p>
      {meta}

      {watchSrc && <WatchShaka src={watchSrc}/>}
    </div>

    <div>
      <img src={imgSrc} alt='Poster not found'/>
    </div>
  </DetailContainer>
)

export default DetailView
