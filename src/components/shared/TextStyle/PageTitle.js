import React from 'react'
import styled from 'styled-components'
import { Color, BoldTextStyle, BasicTextStyle } from '../style'
import "@fontsource/roboto-mono/700.css"

function PageTitle({ jp, eng }) {
    return (
        <Box>
            <EngTitle>
                {eng}
            </EngTitle>
            <JpTitle>
                {jp}
            </JpTitle>
        </Box>
    )
}

const Box = styled.div`
    text-align: center;
    padding-top: 72px;
    @media (min-width: 768px) {
        padding-top: 112px;
    }
`

const JpTitle = styled.h2`
    ${BoldTextStyle}
    color: ${Color.main};
    font-size: 22px;
    line-height: 1.5em;
    @media (min-width: 768px) {
        font-size: 30px;
    }
`

const EngTitle = styled.p`
    ${BasicTextStyle}
    font-family: "Roboto Mono";
    font-weight: 700;
    color: ${Color.sub};
    font-size: 24px;
    line-height: 1em;
`

export default PageTitle
