import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
