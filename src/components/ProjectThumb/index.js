import React, { PropTypes } from "react"
import styles from "./index.css"
import { Link } from "react-router"

const ProjectThumb = ({ project, children }) => {
  return (
    <Link to={ "/projects/" + project.slug } className={ styles.projectThumb + " " + styles.crossBorder } >
      { children }
    </Link>
  )
}

ProjectThumb.propTypes = {
  project: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
}

export default ProjectThumb
