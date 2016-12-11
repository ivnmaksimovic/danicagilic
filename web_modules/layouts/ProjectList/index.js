import React, { Component, PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../PagesList"

const numberOfLatestPosts = 6

export default class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  render() {
    const projects = enhanceCollection(this.context.collection, {
      filter: { layout: "Project", type: "logo" },
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
