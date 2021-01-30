import React from 'react'
import styled from "styled-components"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import {BoldTextStyle, Color} from '../shared/style'

function TopImage() {

  const data = useStaticQuery(graphql`
    query {
      TopImage01:file(relativePath:{eq:"topimg04.png"}) {
        childImageSharp {
          fluid(maxWidth:2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      TopImage02:file(relativePath:{eq:"dummy-image02.png"}) {
        childImageSharp {
          fluid(maxWidth:800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Box>
        <Title>日用品を通し清潔で健康な<br/>暮らしに貢献します</Title>
        <Image fluid={data.TopImage01.childImageSharp.fluid}/>
    </Box>
  )
}

const Box = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;
  @media (min-width: 768px) {
    height: 100vh;
  }
`

const Title = styled.h1`
  ${BoldTextStyle}
  color: ${Color.white};
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 22px;
  @media (min-width: 768px) {
    width: auto;
    font-size: 40px;
  }
`

const Image = styled(Img)`
  width: 100%;
  /* height: 80vh; */
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
  /* @media (min-width:768px) {
    height: 100vh;
  } */
`

export default TopImage
