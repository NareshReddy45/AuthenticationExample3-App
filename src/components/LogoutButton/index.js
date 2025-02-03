import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

const LogoutButton = props => {
  console.log(props, 'logoutButton')
  const logoutButton = () => {
    const {history} = props
    // const token = Cookies.get('jwt_token')
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button type="button" onClick={logoutButton}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
