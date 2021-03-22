import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import {useStaticQuery, graphql} from 'gatsby'

function ProfileImage() {
  const data = useStaticQuery(graphql`
        query {
            file(relativePath:{eq:"president09.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
  return (
    <Box>
      <Img fluid={data.file.childImageSharp.fluid}/>
    </Box>
  )
}

const Box = styled.div`
    width: 100%;
    margin: 0 auto 48px;
    max-width: 608px;
    @media (min-width: 1025px) {
        max-width: none;
        margin: 0;
        width: calc((100% - 80px) / 2);
    }
`

export default ProfileImage
