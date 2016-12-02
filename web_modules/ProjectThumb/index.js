import React, { PropTypes } from "react"
import Svg from "react-svg-inline"
import styles from "./index.css"

const ProjectThumb = ({ project }) => {
  return (
    <a href="#" className={ styles.projectThumb + " " + styles.crossBorder }>
      <Svg svg={ project.svg } />
    </a>
  )
}

ProjectThumb.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectThumb
