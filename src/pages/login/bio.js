import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout/layout"
// import Image from "../components/image"
import SEO from "../../components/seo"
import IsianBio from "../../components/isian_biodata/isian_biodata"


const BioPage = () => (
  <Layout>
    <SEO title="Page Logim || Biodata" />
        <div>
            <IsianBio></IsianBio>

        </div>
             {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default BioPage
