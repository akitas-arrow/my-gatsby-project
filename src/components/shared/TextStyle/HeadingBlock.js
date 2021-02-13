import React from 'react'
import { useInView } from 'react-intersection-observer'
import {BottomIn} from '../keyframes'
import styled, {css} from 'styled-components'

function HeadingBlock({ children }) {
    const [ref, inView] = useInView({
        rootMargin: '-50px 0px',
        triggerOnce: true,
        threshold: 1
    })
    return (
        <Box ref={ref} inView={inView}>
            { children }
        </Box>
    )
}

const animation = css`
    animation: 1s ${BottomIn} ease both;
`

const Box = styled.div`
    position: relative;
    opacity: 0;
    ${props => (props.inView ? animation : 'animation : 0;')};
`

export default HeadingBlock
