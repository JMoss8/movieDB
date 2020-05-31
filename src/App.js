import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from 'components/Header'
import Landing from 'components/Landing'
import Detail from 'components/Detail'
import Search from 'components/Search'

const App = () => (
  <div className='App'>
    <BrowserRouter>
      <Header/>

      <Route exact path='/' component={Landing}/>
      <Route exact path='/detail/:type/:id' component={Detail}/>
      <Route exact path='/search/:query?' component={Search}/>
    </BrowserRouter>
  </div>
)

export default App
