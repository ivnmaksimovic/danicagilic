import React, { Component } from "react"
import ProjectsList from "../../ProjectsList"

export default class Projects extends Component {

  render() {
    const projects = [
      { title: "Sandbox" },
      { title: "Nordiskaspel" },
      { title: "Something else" },
    ]

    return (
      <div>
        <h2>{ "Projects" }</h2>
        <ProjectsList projects={ projects } />
      </div>
    )
  }
}
