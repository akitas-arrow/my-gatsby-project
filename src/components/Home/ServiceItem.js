import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'
import { BoldTextStyle, MediumTextStyle, Color } from '../shared/style'

function ServiceItem({src, title, description, type}) {
    const data = useStaticQuery(graphql`
        query {
            allFile {
                edges {
                    node {
                        relativePath
                        childImageSharp {
                            fluid(maxWidth: 800) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    const image = data.allFile.edges.find(edge => {
        return edge.node.relativePath.includes(src)
    })

    if (!image) return

    return (
        <Container>
            <Image fluid={image.node.childImageSharp.fluid}/>
            <Title type={type}>{title}</Title>
            <p className="description">{description}</p>
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 48px;
    @media (min-width: 768px) {
        width: calc((100% - 40px) / 2);
        margin-top: 72px;
    }
    @media (min-width: 1024px) {
        width: calc((100% - 80px) / 3);
    }
    .description {
        ${MediumTextStyle}
    }
`

const Image = styled(Img)`
    margin: 0 auto;
    max-width:300px;
    width: 90%;
    @media (min-width:768px) {
        max-width: none;
    }
`

const Title = styled.p`
    ${BoldTextStyle}
    font-size: 18px;
    border-bottom: 3px dotted ${Color.sub};
    @media (min-width: 1024px) {
        font-size: 22px;
    }
`

export default ServiceItem
