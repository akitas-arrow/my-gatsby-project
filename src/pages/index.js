import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import News from "../components/News"
import Service from "../components/Service"
import LineUp from "../components/LineUp"
// import LineUpPattern from "../components/LineUpPattern"
import About from "../components/About"
// import AboutPattern from "../components/AboutPattern"

const IndexPage = () => {

  return (
    <Layout>
      <TopImage />
      <News />
      <Service />
      {/* <LineUpPattern />
      <AboutPattern /> */}
      <LineUp />
      <About />
    </Layout>
  )
}

const TopImage = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f3f3f3;
`

export default IndexPage
