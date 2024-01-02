import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const About = () => (
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
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                  className="content-image"
                />
              )}
              {isDarkTheme && (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                  className="content-image"
                />
              )}
            </div>
            <h1 className={isDarkTheme ? 'for-dark-theme' : 'for-light-theme'}>
              About
            </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
