import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/Pages/Home'
import { About } from './components/Pages/About'

import { Contact } from './components/Pages/Contact'
import Foter from './components/Pages/Footer'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <Foter />
      </Router>
    </>
  )
}

export default App
