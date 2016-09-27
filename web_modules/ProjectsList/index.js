import React, { PropTypes } from "react"

const ProjectsList = ({ projects }) => {
  return (
    <div>
    {
      projects.length
        ? (
        <ul>
        {
          projects.map((project) => (
            <li key={ project.title }>{ project.title }</li>
          ))
          }
        </ul>
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
