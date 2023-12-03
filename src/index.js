import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Pricing from './views/pricing'
import About from './views/about'
import NotFound from './views/not-found'
import Services from './views/services'
import Contact from './views/contact'
import Careers from './views/careers'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Pricing} exact path="/pricing" />
        <Route component={About} exact path="/about" />
        <Route component={NotFound} path="/404" />
        <Route component={Services} exact path="/services" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Careers} exact path="/careers" />
        <Route component={Home} exact path="/" />
        <Redirect to="/404" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
