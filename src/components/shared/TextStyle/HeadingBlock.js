import React from 'react'
import { useInView } from 'react-intersection-observer'
import {BottomIn} from '../keyframes'
import styled from 'styled-components'

function HeadingBlock({ children }) {
    const [ref, inView] = useInView({
        rootMargin: '-50px 0px'
    })
    return (
        <Box ref={ref} inView={inView}>
            { children }
        </Box>
    )
}

const Box = styled.div`
    position : relative;
    animation: 1s ${BottomIn} ease-in-out; //アニメーションできる
    /* animation: ${props => props.inView ? `1s ${BottomIn} ease-in-out` : 0};//エラーになる */
`

export default HeadingBlock
