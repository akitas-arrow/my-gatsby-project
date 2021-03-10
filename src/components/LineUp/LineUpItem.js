import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled,{css} from 'styled-components'
import { BottomIn } from '../shared/keyframes'
import { BoldTextStyle, Color } from '../shared/style'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

function LineUpItem({title, description, items, src, direction, color}) {
    const [ref, inView] = useInView({
        rootMargin: '-50px 0px',
        triggerOnce: true,
        threshold: 0.5
    })
    const data = useStaticQuery(graphql`
        query {
            allFile {
                edges {
                    node {
                        relativePath
                        childImageSharp {
                            fluid(maxWidth: 608) {
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
        <Wrapper ref={ref} inView={inView} direction={direction} color={color}>
            <Box direction={direction}>
                <ImageBlock>
                    <Img fluid={image.node.childImageSharp.fluid}/>
                </ImageBlock>
                <TextBlock ref={ref} inView={inView}>
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

const BottomInAnimation = css`
    animation: 1s ${BottomIn} ease both;
`
const SlideIn = css`
    transform-origin: left;
    transform: scaleX(1) skewY(-5deg);
`
const SlideOut = css`
    transform-origin: left;
    transform: scaleX(0) skewY(0deg);
`

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
        top: 36px;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background:${props => Color[props.color]};
        transition: all 0.5s ease;
        ${props => (props.inView ? SlideIn : SlideOut)}
        @media (min-width: 1024px) {
            top: 60px;
        }
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
    /* opacity:${props => props.inView ? 1 : 0}; */
    opacity: 0;
    ${props => (props.inView ? BottomInAnimation : 'animation : 0;')};
    @media (min-width: 1024px) {
        margin: 0;
        max-width: none;
        width: calc((100% - 40px) / 2);
    }
`

const Title = styled.h4`
    padding: 24px 0;
    ${BoldTextStyle}
    font-size: 20px;
    @media (min-width: 768px) {
        padding-top: 0;
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
