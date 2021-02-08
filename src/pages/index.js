import React from "react"
import Layout from "../components/Layout"
import News from "../components/Home/News"
import Service from "../components/Home/Service"
import About from "../components/Home/About"
import LineUp from "../components/Home/LineUp"
import ContactButton from "../components/shared/ContactButton"
import StyledMainImage from "../components/Home/MainImage"
import SEO from '../components/shared/seo'

const IndexPage = () => {

  return (
    <Layout>
      <SEO/>
      <ContactButton />
      <StyledMainImage />
      <News />
      <Service />
      <LineUp/>
      <About />
    </Layout>
  )
}

export default IndexPage
