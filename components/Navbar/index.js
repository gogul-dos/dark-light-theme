import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onChangeTheme = () => {
        toggleTheme()
      }

      return (
        <div
          className={
            !isDarkTheme
              ? 'for-nav-background-light for-navbar-container'
              : 'for-nav-background-dark for-navbar-container'
          }
        >
          <div>
            {!isDarkTheme && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="small-image"
              />
            )}
            {isDarkTheme && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="small-image"
              />
            )}
          </div>
          <div>
            <ul>
              <li>
                <Link
                  className={isDarkTheme ? 'for-dark-color' : 'for-light-color'}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={isDarkTheme ? 'for-dark-color' : 'for-light-color'}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button
              onClick={onChangeTheme}
              type="button"
              className="for-button"
            >
              {isDarkTheme && (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="small-image"
                />
              )}
              {!isDarkTheme && (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="small-image"
                />
              )}
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
