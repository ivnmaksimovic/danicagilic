import React, { Component } from "react"
import ProjectsList from "../../ProjectsList"

// temp data
import sandboxSvg from "../../../content/logo/sandbox.min.svg"
import nordiskaSpelSvg from "../../../content/logo/nordiska-spel.min.svg"
import iBarSvg from "../../../content/logo/i-bar.min.svg"
import finTechSvg from "../../../content/logo/fintech.min.svg"

export default class Projects extends Component {

  render() {
    const projects = [
      {
        title: "Sandbox",
        svg: sandboxSvg,
      },
      {
        title: "Nordiskaspel",
        svg: nordiskaSpelSvg,
      },
      {
        title: "iBar",
        svg: iBarSvg,
      },
      {
        title: "Fin Tech",
        svg: finTechSvg,
      },
    ]

    return (
      <div>
        <h1>{ "Projects" }</h1>
        <ProjectsList projects={ projects } />
      </div>
    )
  }
}
