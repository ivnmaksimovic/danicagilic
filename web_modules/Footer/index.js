import React, { Component, PropTypes } from "react"
import { Link } from "react-router"

import styles from "./index.css"
import Svg from "react-svg-inline"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"

export default class Footer extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <footer className={ styles.footer }>
        <a
          href={ process.env.PHENOMIC_HOMEPAGE }
          className={ styles.link }
        >
          { "Powered by " }
          <span className={ styles.reference }>
            {  `<${ process.env.PHENOMIC_NAME} />` }
          </span>
        </a>

        { " | " }
        { "Pages: " }
        <Link
          className={ styles.link }
          to="/404.html"
        >
          { "404" }
        </Link>
        { ", " }
        <Link
          className={ styles.link }
          to="/loading/"
        >
          { "Loading" }
        </Link>
        { ", " }
        { pkg.repository &&
        <a
          href={ pkg.repository }
          className={ styles.link }
        >
          <Svg svg={ gitHubSvg } />
          { "GitHub" }
        </a>
          }
      </footer>
    )
  }
}
