import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

function Icon() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "thanks.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth:200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <ImageBlock>
        <Img fluid={data.file.childImageSharp.fluid}/>
    </ImageBlock>
  )
}

const ImageBlock = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`

export default Icon
