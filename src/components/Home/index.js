import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => {
  console.log('Home')
  return (
    <>
      <Header />
      <div className="bg-container">
        <h1>Home Route</h1>
        <LogoutButton />
      </div>
    </>
  )
}

export default Home
