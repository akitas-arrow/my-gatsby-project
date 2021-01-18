import React from 'react'
import styled from 'styled-components'
import { BoldTextStyle, Color } from '../shared/style'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

function LineUpItem({title, description, items, src, direction, color}) {
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
        <Wrapper direction={direction} color={color}>
            <Box direction={direction}>
                <ImageBlock>
                    <Img fluid={image.node.childImageSharp.fluid}/>
                </ImageBlock>
                <TextBlock>
                    <Title>
                        {title}
                    </Title>
                    <Text>
                        {description}
                    </Text>
                    <ItemHeader>取扱商品</ItemHeader>
                    <Item>{items}</Item>
                </TextBlock>
            </Box>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    z-index: 0;
    width: 100%;
    padding: 72px 24px;
    position: relative;
    @media (min-width: 1024px) {
        padding: 120px 24px;
    }
    ::before {
        content: "";
        position: absolute;
        top: 0; bottom: 0; left: 0; right: 0;
        z-index: -1;
        background:${props => Color[props.color]};
        transform: ${props => props.direction === 'row' ? 'skewY(-5deg)' : 'skewY(-5deg)'};
    }
`

const Box = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 1024px) {
        flex-direction: ${props => props.direction || 'row-reverse'};
        justify-content: space-between;
        align-items: center;
    }
`

const ImageBlock = styled.div`
    width: 100%;
    max-width:608px;
    margin: 0 auto;
    @media (min-width: 1024px) {
        margin: 0;
        max-width: none;
        width: calc((100% - 40px) / 2);
    }
`

const TextBlock = styled.div`
    max-width:608px;
    margin: 0 auto;
    @media (min-width: 1024px) {
        margin: 0;
        max-width: none;
        width: calc((100% - 40px) / 2);
    }
`

const Title = styled.h4`
    padding: 24px 0;
    ${BoldTextStyle}
    color: ${Color.main};
    font-size: 20px;
    @media (min-width: 768px) {
        padding-top: 0;
        /* padding-bottom: 40px; */
        font-size: 30px;
    }
`

const ItemHeader = styled.p`
    ${BoldTextStyle}
    padding-top: 32px;
`

const Text = styled.p`
    padding-bottom: 32px;
    border-bottom: 3px dotted ${Color.main};
`

const Item = styled.p`
    padding-top: 16px;
`
export default LineUpItem
