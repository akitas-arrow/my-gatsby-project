import React from 'react'
import styled from 'styled-components'
import Container from '../shared/Container'
import Wrapper from '../shared/Wrapper'
import { BoldTextStyle, Color } from '../shared/style'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode (
        sort:{
          fields:timestamp,
          order:DESC
        },
          limit:10
      ){
        edges {
          node {
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
    <Wrapper paddingBottom='0'>
      <Container>
        <Title>
          Instagram
        </Title>
      </Container>
    </Wrapper>
    <Wrapper>
      <Box>
        {
          data.allInstaNode.edges.map(edge => {
            return(
              <Item key={edge.node.id}>
                <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    className="instagram"
                    size='2x'
                />
                <a
                  href={`https://instagram.com/p/${edge.node.id}`}
                  target="_blank" rel="noopener"
                >
                  <Img fluid={edge.node.localFile.childImageSharp.fluid}/>
                </a>
              </Item>
            )
          })
        }
      </Box>
    </Wrapper>
    </>
  )

}

const Title = styled.h2`
  ${BoldTextStyle}
  font-size: 26px;
  color: ${Color.sub};
  text-align: center;
  @media (min-width: 768px) {
        font-size: 42px;
  }
`

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 608px;
  @media (min-width: 1025px) {
    max-width: 1100px;
  }
`

const Item = styled.div`
  position: relative;
  width: 50%;
  z-index: 0;
  @media (min-width: 1025px) {
    width: 20%;
  }
  .instagram {
    position: absolute;
    top: 50%;
    left: 50%;
    transition: color 0.3s ease;
    transform: translate(-50%, -50%);
    z-index:3;
    color: transparent;
  }
  ::before {
    position: absolute;
    z-index: 2;
    top:0;
    left:0;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0);
    transition: background-color 0.3s ease;
    pointer-events: none;
  }
  &:hover {
    .instagram {
      color: white;
    }
    ::before {
      background-color: rgba(0,0,0,0.5);
    }
  }
`

export default Instagram
