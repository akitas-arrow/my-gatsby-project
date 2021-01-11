import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import News from "../components/Home/News"
import Service from "../components/Home/Service"
import LineUp from "../components/Home/LineUp"
import About from "../components/Home/About"

const IndexPage = () => {

  return (
    <Layout>
      <TopImage />
      <News />
      <Service />
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
