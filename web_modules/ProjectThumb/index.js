import React, { PropTypes } from "react"
import Svg from "react-svg-inline"
import styles from "./index.css"

const ProjectThumb = ({ project }) => {
  return (
    <div className={ styles.projectThumb }>
      <Svg svg={ project.svg } />
    </div>
  )
}

ProjectThumb.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectThumb
