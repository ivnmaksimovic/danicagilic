import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import Homepage from "./layouts/Homepage"
import ProjectList from "./layouts/ProjectList"
import Post from "./layouts/Post"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
      ProjectList,
      Post,
    }}
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="/projects/filter/:tag" component={ ProjectList } />
    <Route path="*" component={ PageContainer } />
  </Route>
)
