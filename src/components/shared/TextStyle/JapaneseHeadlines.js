import React from 'react'
import styled from 'styled-components'
import { Color, MediumTextStyle } from '../style'

function JapaneseHeadlines({ children, type }) {
    return (
        <HeadingText type={type}>
            { children }
        </HeadingText>
    )
}

const HeadingText = styled.h2`
    ${MediumTextStyle}
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
