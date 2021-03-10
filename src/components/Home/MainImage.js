import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import styled,{css} from 'styled-components'
import BackgroundImage from 'gatsby-background-image-es5'
import {BoldTextStyle} from '../shared/style'
import {BottomIn} from '../shared/keyframes'

function MainImage({className}) {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
    triggerOnce: true,
    threshold: 1
  })
  const { mobileImage, tabletImage, desktopImage } = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "mobile.jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth:500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      tabletImage: file(relativePath: { eq: "tablet.jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth:1300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopImage: file(relativePath: { eq: "desktop.jpg" }) {
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
          <Title ref={ref} inView={inView}>
            日用品を通し清潔で健康な<br/>暮らしに貢献します
          </Title>
      </Container>
    </BackgroundImage>
  )
}

const animation = css`
    animation: 1s ${BottomIn} ease both;
`

const StyledMainImage = styled(MainImage)`
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-color: transparent;
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
  opacity: 0;
  ${props => (props.inView ? animation : 'animation : 0;')};
  @media (min-width: 768px) {
    font-size: 40px;
  }
`

export default StyledMainImage
