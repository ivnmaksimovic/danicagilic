import React, { Component, PropTypes } from "react"
import { Link } from "react-router"

import styles from "./index.css"
import Svg from "react-svg-inline"
import twitterSvg from "../icons/iconmonstr-twitter-1.svg"

export default class Header extends Component {
  
  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <header className={ styles.header }>
        <nav className={ styles.nav }>
          <div className={ styles.navPart1 }>
            <Link to="/" className={ styles.link } >
              { "About" }
            </Link>
            { " | " }
            <Link to="/" className={ styles.link } >
              { "Contact me" }
            </Link>
          </div>
          <div className={ styles.navPart2 }>
            <Link to="/logo/" className={ styles.link } >
              { "Logo" }
            </Link>
            { " | " }
            <Link to="/print/" className={ styles.link } >
              { "Print" }
            </Link>
            { " | " }
            <Link to="/web/" className={ styles.link } >
              { "Web" }
            </Link>
            { " | " }
            <Link to="/app/" className={ styles.link } >
              { "App" }
            </Link>
            { " | " }
            <Link to="/photo/" className={ styles.link } >
              { "Photo" }
            </Link>
            { pkg.twitter &&
              <a
                href={ `https://twitter.com/${pkg.twitter}` }
                className={ styles.link }
              >
                <Svg svg={ twitterSvg } />
                  { "Twitter" }
              </a>
            }
          </div>
        </nav>
      </header>
    )
  }
}
