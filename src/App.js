import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import { About } from './components/Pages/About'
// import Appointment from './components/Pages/Appointment'
import { Contact } from './components/Pages/Contact'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/appointment" component={Appointment} /> */}
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  )
}

export default App
