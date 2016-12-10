import React, { PropTypes } from "react"
import Svg from "react-svg-inline"
import styles from "./index.css"
import { Link } from "react-router"

const ProjectThumb = ({ project }) => {
  return (
    <Link to={ project.slug } className={ styles.projectThumb + " " + styles.crossBorder } >
      <Svg svg={ project.svg } />
    </Link>
  )
}

ProjectThumb.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectThumb
