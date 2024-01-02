import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
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
            <div className="for-content">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="about"
                className="content-image"
              />

              <h1
                className={isDarkTheme ? 'for-dark-theme' : 'for-light-theme'}
              >
                Lost Your Way?
              </h1>
              <p className={isDarkTheme ? 'for-dark-theme' : 'for-light-theme'}>
                We cannot seem to find the page you are looking for
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
