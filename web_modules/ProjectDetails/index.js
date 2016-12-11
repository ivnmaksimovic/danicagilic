import React, { PropTypes } from "react"

const ProjectDetails = ({ project }) => {
  return (
    <div>
      <div>{ "Project Details Component" }</div>
      { project.title }
    </div>
  )
}

ProjectDetails.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectDetails
