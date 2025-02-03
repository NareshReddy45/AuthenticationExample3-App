import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <div className="header-container">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </div>
  </nav>
)

export default Header
