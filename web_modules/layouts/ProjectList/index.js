import React, { Component, PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../PagesList"

const numberOfLatestPosts = 6

class ProjectList extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  render() {
    const projects = enhanceCollection(this.context.collection, {
      filter: { layout: "Project", type: this.props.params.type },
      sort: "date",
      reverse: true,
    })
    .slice(0, numberOfLatestPosts)

    return (
      <div>
        <h2>{ "List of Projects" }</h2>
        <PagesList pages={ projects } />
      </div>
    )
  }
}

ProjectList.propTypes = {
  params: PropTypes.object.isRequired,
}

export default ProjectList
