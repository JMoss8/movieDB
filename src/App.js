import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Landing from 'components/Landing'

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/movie' component={Landing}/>
    </BrowserRouter>
  </div>
)

export default App
