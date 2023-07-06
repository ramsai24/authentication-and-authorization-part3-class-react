import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
// import Home from '../Home'

const ProtectedRoute = props => {
  console.log(props)
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  //   return <Route exact path="/" component={Home} />
  return <Route {...props} />
}

export default ProtectedRoute
