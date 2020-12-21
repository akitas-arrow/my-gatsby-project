import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import News from "../components/Home/News"
import Service from "../components/Home/Service"
import LineUp from "../components/Home/LineUp"
// import LineUpPattern from "../components/Home/LineUpPattern"
import About from "../components/Home/About"
// import AboutPattern from "../components/Home/AboutPattern"

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
