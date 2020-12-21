import React from 'react'
import styled from 'styled-components'
import { Color, BoldTextStyle } from '../style'

function PageTitle({ children }) {
    return (
        <Title>
            { children }
        </Title>
    )
}

const Title = styled.h2`
    ${BoldTextStyle}
    color: ${Color.peacock};
    text-align: center;
    /* height: 176px; */
    padding-top: 72px;
    font-size: 22px;
    @media (min-width: 768px) {
        /* height: 268px; */
        padding-top: 112px;
        font-size: 30px;
    }
`

export default PageTitle
