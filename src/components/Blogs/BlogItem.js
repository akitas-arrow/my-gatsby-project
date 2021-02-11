import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled,{css} from 'styled-components'
import {BottomIn} from '../shared/keyframes'
import {Link} from 'gatsby'
import {MediumTextStyle, Color} from '../shared/style'

function BlogItem({title, link, url, date}) {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
    triggerOnce: true,
    threshold: '0.5'
  })
  return (
    <Box ref={ref} inView={inView} to={`/${link}`}>
      <img src={`${url}?fit=crop&w=780&h=520`}/>
      <Date>
        {date}
      </Date>
      <Title>
        {title}
      </Title>
    </Box>
  )
}

const animation = css`
    animation: 0.5s ${BottomIn} ease-in-out;
`

const Box = styled(Link)`
    display: block;
    cursor: pointer;
    padding: 24px;
    width: 100%;
    margin-bottom: 48px;
    text-decoration: none;
    opacity:${props => props.inView ? 1 : 0};
    ${props => (props.inView ? animation : 'animation : 0;')};
    @media (min-width: 768px) {
      width: 50%;
      margin-bottom: 80px;
    }
    :hover {
      background:${Color.sheer};
    }
`

const Date = styled.p`
  ${MediumTextStyle}
`

const Title = styled.p`
  ${MediumTextStyle}
  @media (min-width: 768px) {
      font-size: 18px;
    }
`


export default BlogItem
