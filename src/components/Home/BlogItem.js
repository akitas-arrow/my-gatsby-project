import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import { MediumTextStyle, Color } from '../shared/style'

function BlogItem({title, date, link}) {
    return (
        <Box to={`/${link}`}>
            <Date>{date}</Date>
            <Name className="name">{title}</Name>
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
    @media (min-width: 768px) {
        flex-direction: row;
        max-width: 608px;
        margin: 0 auto;
    }
    :hover {
        .name {
            background: linear-gradient(transparent 70%, ${Color.bg} 70%);
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

const Name = styled.p`
    ${MediumTextStyle}
    /* :hover {
        background: linear-gradient(transparent 70%, ${Color.bg} 70%);
    } */
`

export default BlogItem
