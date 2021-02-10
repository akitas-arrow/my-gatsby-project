import React from 'react'
import { useInView } from 'react-intersection-observer'
import {BottomIn} from '../keyframes'
import styled, {css} from 'styled-components'

function HeadingBlock({ children }) {
    const [ref, inView] = useInView({
        rootMargin: '-50px 0px',
        triggerOnce: true
    })
    return (
        <Box ref={ref} inView={inView}>
            { children }
        </Box>
    )
}

const animation = css`
    animation: 0.5s ${BottomIn} ease-in-out;
`

const Box = styled.div`
    position: relative;
    opacity:${props => props.inView ? 1 : 0};
    ${props => (props.inView ? animation : 'animation : 0;')};
`

export default HeadingBlock
