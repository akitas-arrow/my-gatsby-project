import React from 'react'
import styled from 'styled-components'
import { MediumTextStyle } from '../style'

function JapaneseHeadlines({ children, type }) {
    return (
        <HeadingText type={type}>
            { children }
        </HeadingText>
    )
}

const HeadingText = styled.h2`
    ${MediumTextStyle}
    font-size: 15px;
    text-align: ${props => props.type || 'left'};
    @media (min-width: 768px) {
        font-size: 18px;
    }
`

export default JapaneseHeadlines
