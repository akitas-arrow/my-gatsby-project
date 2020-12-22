import React from 'react'
import styled from "styled-components"
import { MediumTextStyle } from '../shared/style'

function BlogItem({title, date}) {
    return (
        <Box>
            <Date>{date}</Date>
            <Name>{title}</Name>
        </Box>
    )
}

const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    max-width: 1100px;
    @media (min-width: 768px) {
        flex-direction: row;
        max-width: 608px;
        margin: 0 auto;
    }
`

const Date = styled.p`
    padding-bottom: 8px;
    /* background-color: orange; */
    @media (min-width: 768px) {
        padding-bottom: 0;
        padding-right: 112px;
    }
`

const Name = styled.p`
    ${MediumTextStyle}
`

export default BlogItem
