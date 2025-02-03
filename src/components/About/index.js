import Header from '../Header'

import LogoutButton from '../LogoutButton'
import './index.css'

const About = () => {
  console.log('About')
  return (
    <>
      <Header />
      <div className="bg-container">
        <h1>About Route</h1>
        <LogoutButton />
      </div>
    </>
  )
}

export default About
