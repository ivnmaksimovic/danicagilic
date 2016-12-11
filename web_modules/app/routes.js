import React, { Component } from "react"
import { Route } from "react-router"

import LayoutContainer from "../LayoutContainer"
import PhenomicPageContainer from "phenomic/lib/PageContainer"

import Page from "../layouts/Page"
import PageError from "../layouts/PageError"
import PageLoading from "../layouts/PageLoading"
import Post from "../layouts/Post"
import Project from "../layouts/Project"
import ProjectDetails from "../layouts/ProjectDetails"
import ProjectList from "../layouts/ProjectList"
import Projects from "../pages/Projects"

class PageContainer extends Component {
  render() {
    const { props } = this
    return (
      <PhenomicPageContainer
        { ...props }
        layouts={ {
          Page,
          PageError,
          PageLoading,
          Post,
          Project,
          ProjectDetails,
          ProjectList,
        } }
      />
    )
  }
}

export default (
  <Route component={ LayoutContainer }>
    <Route path="/projects/logolist/" component={ Projects } />
    <Route path="/projects/:tag" component={ ProjectList } />
    <Route path="*" component={ PageContainer } />
  </Route>
)
