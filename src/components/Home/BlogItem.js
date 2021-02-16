import React from 'react'
import { useInView } from 'react-intersection-observer'
import {BottomIn} from '../shared/keyframes'
import { Link } from 'gatsby'
import styled, {css} from "styled-components"
import { Color } from '../shared/style'

function BlogItem({title, date, link}) {
    const [ref, inView] = useInView({
        rootMargin: '50px 0px',
        triggerOnce: true,
        threshold: 1
    })
    return (
        <Box to={`/${link}`} ref={ref} inView={inView}>
            <Date>{date}</Date>
            <p className="name">{title}</p>
        </Box>
    )
}

const animation = css`
    animation: 1s ${BottomIn} ease both;
`

const Box = styled(Link)`
    display: block;
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    max-width: 1100px;
    text-decoration: none;
    color:${Color.main};
    opacity: 0;
    ${props => (props.inView ? animation : 'animation : 0;')};
    @media (min-width: 768px) {
        flex-direction: row;
        max-width: 608px;
        margin: 0 auto;
    }
    .name {
        position: relative;
        z-index: 1;
        overflow: hidden;
    }
    .name::after {
        z-index: -1;
        content: '';
        transition: all 0.5s ease;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(transparent 70%, ${Color.bg} 70%);
        transform: translateX(-100%);
    }
    :hover {
            .name::after {
                transform:translateX(0);
        }
    }
`

const Date = styled.p`
    padding-bottom: 8px;
    @media (min-width: 768px) {
        padding-bottom: 0;
        padding-right: 112px;
    }
`

export default BlogItem
