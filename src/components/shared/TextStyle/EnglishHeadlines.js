import React from 'react'
import styled from 'styled-components'
import "fontsource-source-sans-pro"
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
    font-family: "Source Sans Pro";
    font-style: italic;
    color: ${Color.peacock};
    font-size: 48px;
    line-height: 1em;
    text-align: ${props => props.type || 'left'};
    @media (min-width: 768px) {
        font-size: 64px;       
    }
    @media (min-width: 1025px) {
        font-size: 80px;       
    }
`

export default EnglishHeadlines
