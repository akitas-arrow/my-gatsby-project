import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import News from "../components/Home/News"
import Service from "../components/Home/Service"
import About from "../components/Home/About"
import LineUp from "../components/Home/LineUp"
import TopImage from "../components/Home/TopImage"

const IndexPage = () => {

  return (
    <Layout>
      <TopImage />
      <News />
      <Service />
      <LineUp/>
      <About />
    </Layout>
  )
}

export default IndexPage
