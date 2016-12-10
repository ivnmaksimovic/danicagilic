import React, { Component } from "react"
import ProjectsList from "../../ProjectsList"
import styles from "./index.css"
import projects from "../../app/projects"

export default class Projects extends Component {

  render() {

    return (
      <div className={ styles.projects }>
        <ProjectsList projects={ projects } />
      </div>
    )
  }
}
