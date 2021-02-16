import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled,{css} from 'styled-components'
import Container from '../shared/Container'
import {BoldTextStyle} from '../shared/style'
import {SlideInText} from '../shared/keyframes'

function TitleBlock({date, title}) {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
    triggerOnce: true,
    threshold: 1
  })
  return (
    <Container>
        <Date ref={ref} inView={inView}>
            {date}
        </Date>
        <Title ref={ref} inView={inView}>
            {title}
        </Title>
    </Container>
  )
}

const animation = css`
    animation: 1s ${SlideInText} ease both;
`

const Date = styled.p`
  opacity: 0;
  ${props => (props.inView ? animation : 'animation : 0;')};
`

const Title = styled.h2`
  ${BoldTextStyle}
  font-size: 22px;
  opacity: 0;
  ${props => (props.inView ? animation : 'animation : 0;')};
    @media (min-width: 768px) {
        font-size: 30px;
    }
`


export default TitleBlock
