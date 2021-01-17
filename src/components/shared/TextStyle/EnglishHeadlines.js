import React from 'react'
import styled from 'styled-components'
import "@fontsource/roboto-mono/700.css"
import { BasicTextStyle, Color } from '../style.js'

function EnglishHeadlines({ children, type }) {
    return (
        <HeadingText type={type}>
            {children}
        </HeadingText>
    )
}

const HeadingText = styled.h2`
    ${BasicTextStyle}
    font-family: "Roboto Mono";
    font-weight: 700;
    color: ${Color.sub};
    font-size: 56px;
    line-height: 1em;
    text-align: ${props => props.type || 'left'};
    @media (min-width: 768px) {
        font-size: 80px;
    }
`

export default EnglishHeadlines
