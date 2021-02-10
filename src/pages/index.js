import React from "react"

import Layout from "../components/layout/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import IsiToken from "../components/isian_token/isian_token"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IsiToken></IsiToken>

    <div style={{ maxWidth: `300px` /*, marginBottom: `1.45rem`*/ }}>
      {/* <Image /> */}
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
