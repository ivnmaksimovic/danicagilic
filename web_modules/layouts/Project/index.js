import React, { Component, PropTypes } from "react"

import ProjectDetails from "../ProjectDetails"

class Project extends Component {

  // it's up to you to choose what to do with this layout ;)

  render() {
    const { props } = this
    const { head } = props

    const pageDate = head.date ? new Date(head.date) : null

    return (
      <ProjectDetails
        { ...props }
        header={
          <header>
          {
            pageDate &&
            <time key={ pageDate.toISOString() }>
              { pageDate.toDateString() }
            </time>
          }
          </header>
        }
      />
    )
  }
}

Project.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Project
