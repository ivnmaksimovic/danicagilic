import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import ProjectThumb from "../../components/ProjectThumb"
import styles from "./index.css"
import Svg from "react-svg-inline"

const defaultNumberOfPosts = 6

const ProjectList = (props, { collection }) => {
  const projects = enhanceCollection(collection, {
    filter: ({ online }) => online === true,
    sort: "date",
    reverse: true,
  })
  .slice(0, props.numberOfPosts || defaultNumberOfPosts)

  return (
    <div className={ styles.projectList }>
      {
        projects.length === 0 && "Creating..."
      }
      {
        projects.map((project) => {
          // TODO use svg sprite
          project.svg = require("../../../content/assets/logo/" + project.slug + ".min.svg")

          return (
            <ProjectThumb key={ project.title } project={ project } >
              { project.svg && <Svg svg={ project.svg } /> }
            </ProjectThumb>
          )
        })
      }
    </div>
  )
}

ProjectList.propTypes = {
  numberOfPosts: PropTypes.number,
}

ProjectList.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default ProjectList
