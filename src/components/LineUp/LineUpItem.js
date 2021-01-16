import React from 'react'
import styled from 'styled-components'
import { MediumTextStyle, BoldTextStyle, Color } from '../shared/style'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import backgroundImage from '../../images/wrap.jpeg'

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
        <>
        <Wrapper direction={direction} color={color} backgroundImage={backgroundImage}>
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
        </>
    )
}

const Wrapper = styled.div`
    margin-top: 48px;
    z-index: 0;
    width: 100%;
    padding: 48px 24px;
    /* padding: 72px 24px; */
    position: relative;
    @media (min-width: 1024px) {
        padding: 72px 24px;
        /* padding: 120px 24px; */
    }
    ::before {
        content: "";
        position: absolute;
        top: 0; bottom: 0; left: 0; right: 0;
        z-index: -1;
        background-color:${props => Color[props.color]};
        /* background-color:${props => props.direction === 'row' ? 'rgba(242,248,239,0.6)' : 'rgba(221,241,226,0.6)'}; */
        /* transform: skewY(4deg); */
        transform: ${props => props.direction === 'row' ? 'skewY(-5deg)' : 'skewY(-5deg)'};
        /* background-image:url(${props => props.backgroundImage});
        background-blend-mode: color-burn; */
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
    padding-bottom: 40px;
    ${BoldTextStyle}
    font-size: 18px;
    @media (min-width: 768px) {
        font-size: 26px;
    }
`

const ItemHeader = styled.p`
    ${MediumTextStyle}
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
