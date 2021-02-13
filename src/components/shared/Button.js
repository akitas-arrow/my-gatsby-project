import React from 'react'
import { useInView } from 'react-intersection-observer'
import {BottomIn} from './keyframes'
import { Link } from 'gatsby'
import styled,{css} from 'styled-components'
import { MediumTextStyle, Color } from './style'

function Button({ bg, color, slug, children }) {
    const [ref, inView] = useInView({
        rootMargin: '-50px 0px',
        triggerOnce: true,
        threshold: 0.5
    })
    return (
        <ButtonContainer
            ref={ref} inView={inView} to={slug} bg={bg} color={color}
        >
            { children }
        </ButtonContainer>
    )
}

const animation = css`
    animation: 1s ${BottomIn} ease both;
`

const ButtonContainer = styled(Link)`
    text-decoration: none;
    z-index: 1;
    margin: 72px auto 0;
    box-sizing: border-box;
    cursor: pointer;
    ${MediumTextStyle}
    display: table;
    color: ${props => Color[props.color] || Color.main};
    font-size: 15px;
    height: 56px;
    line-height: 44px;
    padding: 0px 78px 12px 66px;
    background-color: ${props => Color[props.bg] || Color.bg};
    position: relative;
    user-select: none;
    transition: all 0.3s;
    /* opacity:${props => props.inView ? 1 : 0}; */
    opacity: 0;
    ${props => (props.inView ? animation : 'animation : 0;')}
    ::before {
        box-sizing: border-box;
        border: 2px solid ${Color.main};
        display: block;
        content: "";
        z-index: -1;
        width: 100%;
        height: 56px;
        position: absolute;
        top: -6px;
        left: -6px;
        transition: all 0.3s ease;
    }
    :hover {
        line-height: 56px;
        padding: 0 72px;
    }
    :hover::before {
        top: 0;
        left: 0;
    }
    @media(min-width: 375px) {
        padding: 0px 86px 12px 74px;
        :hover {
            padding: 0 80px;
        }
    }
`

export default Button
