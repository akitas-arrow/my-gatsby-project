import React from 'react'
import { useInView } from 'react-intersection-observer'
import {BottomIn} from '../shared/keyframes'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled,{css} from 'styled-components'
import { BoldTextStyle, MediumTextStyle, Color } from '../shared/style'

function ServiceItem({src, title, descriptions}) {
    const [ref, inView] = useInView({
        rootMargin: '-50px 0px',
        triggerOnce: true
    })
    const data = useStaticQuery(graphql`
        query {
            allFile {
                edges {
                    node {
                        relativePath
                        childImageSharp {
                            fluid(maxWidth: 600) {
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
        <Container ref={ref} inView={inView}>
            <Image fluid={image.node.childImageSharp.fluid}/>
            <Title>{title}</Title>
            {
                descriptions.map((description, index) => {
                    return <p key={index} className="description">{description}</p>
                })
            }
        </Container>
    )
}

const animation = css`
    animation: 0.5s ${BottomIn} ease-in-out;
`

const Container = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 48px;
    opacity:${props => props.inView ? 1 : 0};
    ${props => (props.inView ? animation : 'animation : 0;')};
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
