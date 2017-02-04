import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"

import styles from "./index.css"

const Header = (props, { metadata: { pkg } }) => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        <Link to={ "/" } className={ styles.link } >
          { "Home" }
        </Link>
        <Link to="/projects/filter/logo/" className={ styles.link } >
          { "Logo" }
        </Link>
        { " | " }
        <Link to="/projects/filter/print/" className={ styles.link } >
          { "Print" }
        </Link>
        { " | " }
        <Link to="/projects/filter/web/" className={ styles.link } >
          { "Web" }
        </Link>
        { " | " }
        <Link to="/projects/filter/app/" className={ styles.link } >
          { "App" }
        </Link>
        { " | " }
        <Link to="/projects/filter/photo/" className={ styles.link } >
          { "Photo" }
        </Link>
      </div>
      <div className={ styles.navPart2 }>
        {
          pkg.twitter &&
          <a
            href={ `https://twitter.com/${pkg.twitter}` }
            className={ styles.link }
          >
            <Svg svg={ twitterSvg } cleanup />
            { "Twitter" }
          </a>
        }
        {
          pkg.repository &&
          <a
            href={ pkg.repository }
            className={ styles.link }
          >
            <Svg svg={ gitHubSvg } cleanup />
            { "GitHub" }
          </a>
        }
      </div>
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
