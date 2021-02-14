import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image-es5'
import {BoldTextStyle} from '../shared/style'

function MainImage({className}) {
  const { mobileImage, tabletImage, desktopImage } = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "mobile01.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth:750) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      tabletImage: file(relativePath: { eq: "tablet.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth:1536) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopImage: file(relativePath: { eq: "desktop01.png" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...tabletImage.childImageSharp.fluid,
      media:`(min-width:500px)`,
    },
    {
      ...desktopImage.childImageSharp.fluid,
      media:`(min-width:1025px)`,
    },
  ]

  return (
    <BackgroundImage
      Tag={`section`}
      id={`test`}
      className={className}
      fluid={sources}
    >
      <Container>
        <Title>日用品を通し清潔で健康な<br/>暮らしに貢献します</Title>
      </Container>
    </BackgroundImage>
  )
}

const StyledMainImage = styled(MainImage)`
  width: 100%;
  min-height: 100vh;
  /* You should set a background-size as the default value is "cover"! */
  background-size: cover;
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
  /* Now again, remember the stacking order of CSS: lowermost comes last! */
  background-repeat: no-repeat;
  background-position: bottom center;
  color: #fff;
`

const Container = styled.div`
  width: 80%;
  padding: 100px 0;
  display: flex;
  margin: 0 auto;
  justify-content: flex-end;
  @media (min-width: 768px) {
    width: 75%;
  }
`

const Title = styled.h1`
  ${BoldTextStyle}
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  font-size: 22px;
  background-color: rgba(255, 255, 255, 0.6);
  @media (min-width: 768px) {
    font-size: 40px;
  }
`

export default StyledMainImage
