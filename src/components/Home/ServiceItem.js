import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'
import { BoldTextStyle, Color } from '../shared/style'

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
            <Img fluid={image.node.childImageSharp.fluid}/>
            <Title type={type}>{title}</Title>
            <p>{description}</p>
        </Container>
    )
}

const Container = styled.div`
    /* background-color: pink; */
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
`

const Title = styled.p`
    ${BoldTextStyle}
    font-size: 18px;
    /* color: ${Color.main}; */
    /* padding-top: 24px; */
    /* border-bottom: 3px dotted ${props => Color[props.type]}; */
    border-bottom: 3px dotted ${Color.main};
    @media (min-width: 1024px) {
        font-size: 22px;
    }
`

export default ServiceItem
