import React from 'react'
import { useInView } from 'react-intersection-observer'
import {BottomIn} from '../keyframes'
import styled, {css} from 'styled-components'
import { Color, BoldTextStyle, BasicTextStyle } from '../style'
import "@fontsource/roboto-mono/700.css"

function PageTitle({ jp, eng }) {
    const [ref, inView] = useInView({
        rootMargin: '-50px 0px',
        triggerOnce: true
    })
    return (
        <Box>
            <EngTitle ref={ref} inView={inView}>
                {eng}
            </EngTitle>
            <JpTitle ref={ref} inView={inView}>
                {jp}
            </JpTitle>
        </Box>
    )
}

const animation = css`
    animation: 1s ${BottomIn} ease both;
`

const Box = styled.div`
    text-align: center;
    padding-top: 72px;
    @media (min-width: 768px) {
        padding-top: 112px;
    }
`

const JpTitle = styled.h2`
    ${BoldTextStyle}
    color: ${Color.sub};
    font-size: 14px;
    line-height: 1.5em;
    /* opacity:${props => props.inView ? 1 : 0}; */
    opacity: 0;
    ${props => (props.inView ? animation : 'animation : 0;')};
    @media (min-width: 768px) {
        font-size: 18px;
    }
`

const EngTitle = styled.p`
    ${BasicTextStyle}
    font-family: "Roboto Mono";
    font-weight: 700;
    color: ${Color.sub};
    line-height: 1.5em;
    font-size: 26px;
    /* opacity:${props => props.inView ? 1 : 0}; */
    opacity: 0;
    ${props => (props.inView ? animation : 'animation : 0;')};
    @media(min-width: 768px) {
        font-size: 42px;
    }
`

export default PageTitle
