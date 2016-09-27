import React, { Component } from "react"
import ProjectsList from "../../ProjectsList"

// temp data
import gitHubSvg from "../../icons/iconmonstr-github-1.svg"

export default class Projects extends Component {

  render() {
    const projects = [
      {
        title: "Sandbox",
        svg: gitHubSvg,
      },
      {
        title: "Nordiskaspel",
        svg: gitHubSvg,
      },
      {
        title: "Something else",
        svg: gitHubSvg,
      },
    ]

    return (
      <div>
        <h2>{ "Projects" }</h2>
        <ProjectsList projects={ projects } />
      </div>
    )
  }
}
