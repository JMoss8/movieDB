import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
  <header>
    <Link to='/'>Home</Link><br/>
    <Link to='/search'>Search</Link><br/>
  </header>
)

export default Header
