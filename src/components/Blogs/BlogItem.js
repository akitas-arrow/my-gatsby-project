import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {BasicTextStyle,MediumTextStyle, Color} from '../shared/style'

function BlogItem({title, link, url, date}) {
  return (
    <Box to={`/${link}`}>
      <Img src={`${url}?fit=crop&w=780&h=520`}/>
      <Date>
        {date}
      </Date>
      <Title>
        {title}
      </Title>
    </Box>
  )
}

const Box = styled(Link)`
    /* background-color: pink; */
    display: block;
    cursor: pointer;
    padding: 24px;
    width: 100%;
    margin-bottom: 48px;
    text-decoration: none;
    @media (min-width: 768px) {
      width: 50%;
      /* width: calc((100% - 40px) / 2); */
      margin-bottom: 80px;
    }
    :hover {
      background-color:${Color.bg};
    }
`

const Img = styled.img`

`

const Date = styled.p`
  ${BasicTextStyle}
  color: ${Color.main};
`

const Title = styled.p`
  ${MediumTextStyle}
  color: ${Color.main};
  @media (min-width: 768px) {
      font-size: 18px;
    }
`


export default BlogItem
