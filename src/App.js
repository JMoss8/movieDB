import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Landing from 'components/Landing'
import Detail from 'components/Detail'

const App = () => (
  <div className='App'>
    <BrowserRouter>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/detail/:type/:id' component={Detail}/>
    </BrowserRouter>
  </div>
)

export default App
