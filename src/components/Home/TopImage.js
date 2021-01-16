import React from 'react'
import styled from "styled-components"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
// import {BoldTextStyle, Color} from '../shared/style'

function TopImage() {

  const data = useStaticQuery(graphql`
    query {
      TopImage01:file(relativePath:{eq:"dummy-image.png"}) {
        childImageSharp {
          fluid(maxWidth:800) {
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
        <Image fluid={data.TopImage01.childImageSharp.fluid}/>
    </Box>
  )
}

const Box = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  padding-top: 88px;
  @media (min-width:1025px) {
    /* padding-top: 120px; */
  }
`

const Image = styled(Img)`
  width: 100%;
  height: calc(100vh - 88px);
  object-fit: cover;
  object-position: 50% 50%;
`

export default TopImage
