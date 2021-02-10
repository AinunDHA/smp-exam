
import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout/layout"
// import Image from "../components/image"
import SEO from "../../components/seo"
import RulesBox from "../../components/rulesbox/rulesbox"



const RulesPage = () => (
  <Layout>
    <SEO title="Page Login || Rules" />
        <div>
        <div>
            <RulesBox></RulesBox>
        </div>

             {/* <Link to="/">Go back to the homepage</Link> */}
        </div>

  </Layout>
)

export default RulesPage
