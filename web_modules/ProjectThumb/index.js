import React, { PropTypes } from "react"
import Svg from "react-svg-inline"

const ProjectThumb = ({ project }) => {
  return (
    <div>
      { project.title }
      <Svg svg={ project.svg } />
    </div>
  )
}

ProjectThumb.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectThumb
