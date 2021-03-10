import React from 'react'
import { useInView } from 'react-intersection-observer'
import {BottomIn} from '../shared/keyframes'
import styled, {css} from 'styled-components'
import { Color, BoldTextStyle } from '../shared/style'
import "@fontsource/roboto-mono/700.css"

function PageTitle({ jp, eng }) {
    const [ref, inView] = useInView({
        rootMargin: '-50px 0px',
        triggerOnce: true
    })
    return (
        <Box>
            <JpTitle ref={ref} inView={inView}>
                {jp}
            </JpTitle>
            <EngTitle ref={ref} inView={inView}>
                {eng}
            </EngTitle>
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

const EngTitle = styled.h2`
    font-family: "Roboto Mono";
    font-weight: 700;
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

const JpTitle = styled.p`
    ${BoldTextStyle}
    color: ${Color.sub};
    line-height: 1.5em;
    font-size: 20px;
    /* opacity:${props => props.inView ? 1 : 0}; */
    opacity: 0;
    ${props => (props.inView ? animation : 'animation : 0;')};
    @media(min-width: 768px) {
        font-size: 26px;
    }
`

export default PageTitle
