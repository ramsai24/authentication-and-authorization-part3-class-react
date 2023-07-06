import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      {/* <ProtectedRoute /> */}
      <ProtectedRoute exact path="/" component={Home} />
      {/* <Route exact path="/products" component={Products} /> */}
      <ProtectedRoute exact path="/products" component={Products} />
      {/* <Route exact path="/cart" component={Cart} /> */}
      <ProtectedRoute exact path="/cart" component={Cart} />
      <Route component={NotFound} />
      {/* <NotFound /> */}
      {/* <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" /> */}
    </Switch>
  </BrowserRouter>
)

export default App
