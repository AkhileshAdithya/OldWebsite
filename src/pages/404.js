import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundError from '../components/backgrounderror'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <BackgroundError /> 
  </Layout>
)

export default NotFoundPage
