import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import { MediumTextStyle, Color } from '../shared/style'

function BlogItem({title, date, link}) {
    return (
        <Box to={`/${link}`}>
            <Date>{date}</Date>
            <Name>{title}</Name>
        </Box>
    )
}

const Box = styled(Link)`
    display: block;
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    max-width: 1100px;
    text-decoration: none;
    color: ${Color.letter};
    transition: .3s;
    transform: scale(1);
    @media (min-width: 768px) {
        flex-direction: row;
        max-width: 608px;
        margin: 0 auto;
    }
    :hover {
        transform: scale(1.1);
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
