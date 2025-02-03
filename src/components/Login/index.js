import {Redirect} from 'react-router-dom'
import {Component} from 'react'

import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    name: 'rahul',
    userPassword: 'rahul@2021',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onClickLoginButton = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const {name, userPassword} = this.state
    const userDetails = {username: name, password: userPassword}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    const token = Cookies.get('jwt_token')

    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-container">
        <h1>Please Login</h1>
        <button type="button" onClick={this.onClickLoginButton}>
          Login With Sample Creds
        </button>
      </div>
    )
  }
}
export default Login
