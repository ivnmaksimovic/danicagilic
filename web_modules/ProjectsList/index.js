import React, { PropTypes } from "react"
import ProjectThumb from "../ProjectThumb"
import styles from "./index.css"

const ProjectsList = ({ projects }) => {
  return (
    <div className={ styles.projectList }>
      {
        projects.length === 0 && "Creating..."
      }
      {
        projects.map((project) => (
          <ProjectThumb key={ project.title } project={ project } />
        ))
      }
    </div>
  )
}

ProjectsList.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default ProjectsList
