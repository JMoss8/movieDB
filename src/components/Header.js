import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyled = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  padding: 1em;
  box-shadow: rgba(0, 0, 0, .25) 0 0 1em;
  line-height: 1em;
  background: white;
`

const LinkStyled = styled(Link)`
  padding: 1em;
`

const Header = () => (
  <HeaderStyled>
    <LinkStyled to='/'>Home</LinkStyled>
    <LinkStyled to='/search'>Search</LinkStyled>
  </HeaderStyled>
)

export default Header
