import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from '../style';
import Home from './Home'
import Tasks from './Tasks'
import Nav from './Nav'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Nav />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/tasks'>
            <Tasks />
          </Route>
        </Switch>
    </Router>
  )
}

export default App
