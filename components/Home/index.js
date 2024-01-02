import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          <Navbar />
          <div
            className={
              isDarkTheme ? 'for-content back-dark' : 'for-content back-light'
            }
          >
            <div>
              {!isDarkTheme && (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="about"
                  className="content-image"
                />
              )}
              {isDarkTheme && (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="about"
                />
              )}
            </div>
            <h1 className={isDarkTheme ? 'for-dark-theme' : 'for-light-theme'}>
              Home
            </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
