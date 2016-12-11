import React, { Component } from "react"
import ProjectsDetails from "../../ProjectDetails"

export default class Project extends Component {

  render() {
    // temp data
    let project = {
      title: "Some title",
    }

    return (
      <div>
        <ProjectsDetails project={ project } />
      </div>
    )
  }
}
