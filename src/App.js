import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import styled from 'styled-components'

import Header from 'components/Header'
import Landing from 'components/Landing'
import Detail from 'components/Detail'
import Search from 'components/Search'

const Container = styled.section`
  max-width: 73em;
  width: 90%;
  margin: 0 auto;
  padding-top: 4em;
`

const App = () => (
  <div className='App'>
    <BrowserRouter>
      <Header/>

      <Container>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/detail/:type/:id' component={Detail}/>
        <Route exact path='/search/:query?' component={Search}/>
      </Container>
    </BrowserRouter>
  </div>
)

export default App
