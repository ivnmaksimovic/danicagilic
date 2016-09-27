import React, { PropTypes } from "react"
import ProjectThumb from "../ProjectThumb"

const ProjectsList = ({ projects }) => {
  return (
    <div>
    {
      projects.length
        ? (
        <div>
        {
          projects.map((project) => (
            <ProjectThumb key={ project.title } project={ project } />
          ))
          }
        </div>
      )
        : "Creating..."
      }
    </div>
  )
}

ProjectsList.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default ProjectsList
