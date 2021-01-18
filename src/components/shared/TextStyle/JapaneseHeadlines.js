import React from 'react'
import styled from 'styled-components'
import { Color, BoldTextStyle } from '../style'

function JapaneseHeadlines({ children, type }) {
    return (
        <HeadingText type={type}>
            { children }
        </HeadingText>
    )
}

const HeadingText = styled.h2`
    ${BoldTextStyle}
    color: ${Color.main};
    font-size: 22px;
    position : absolute;
    top: 1.2em;
    &[type='right'] {
        right: 0;
    }
    @media (min-width: 768px) {
        font-size: 30px;
    }
`

export default JapaneseHeadlines
