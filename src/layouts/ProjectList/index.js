import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import ProjectThumb from "../../components/ProjectThumb"
import styles from "./index.css"
import Svg from "react-svg-inline"

const defaultNumberOfPosts = 6

const ProjectList = (props, { collection }) => {
  const { tag } = props.params

  const projects = enhanceCollection(collection, {
    filter:(item) => {
      /* eslint-disable no-use-before-define */
      // console.log(item.tags, tag, props.params)
      /* eslint-enable no-use-before-define */
      return item.online === true && (item.tags && item.tags.indexOf(tag) > -1)
    },
    sort: "date",
    reverse: true,
  })
  .slice(0, 30 || defaultNumberOfPosts)

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
  params: PropTypes.object,
}

ProjectList.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default ProjectList
