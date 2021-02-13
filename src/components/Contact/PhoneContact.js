import React from 'react'
import { useInView } from 'react-intersection-observer'
import { BottomIn } from '../shared/keyframes'
import styled,{css} from 'styled-components'
import { PhoneNumberStyle, Color, BoldTextStyle } from '../shared/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from '../shared/Container'

function PhoneContact() {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
    triggerOnce: true,
  })
  return (
    <Bg ref={ref} inView={inView}>
    <Container>
      <TextBlock ref={ref} inView={inView}>
        <MenuTitle>お電話でのお問い合わせ</MenuTitle>
        <PhoneNumber>
          <FontAwesomeIcon icon="phone-alt" color={Color.main}/>
          &emsp;052-412-5166
        </PhoneNumber>
        <p>平日8:00ー17:00</p>
      </TextBlock>
    </Container>
  </Bg>
  )
}

const BottomInAnimation = css`
    animation: 1s ${BottomIn} ease both 0.5s;
`
const SlideIn = css`
    transform-origin: left;
    transform: scaleX(1) skewY(-5deg);
`
const SlideOut = css`
    transform-origin: left;
    transform: scaleX(0) skewY(0deg);
`

const TextBlock = styled.div`
  ${BoldTextStyle}
  text-align: center;
  opacity: 0;
  ${props => (props.inView ? BottomInAnimation : 'animation : 0;')}
`

const MenuTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`
const PhoneNumber = styled.p`
    ${PhoneNumberStyle}
    @media (min-width:768px) {
      font-size: 26px;
    }
`

const Bg = styled.div`
    z-index: 0;
    width: 100%;
    padding: 72px 24px;
    position: relative;
    ::before {
        content: "";
        position: absolute;
        top: 36px;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background:${Color.gradient};
        transition: all 0.5s ease;
        ${props => (props.inView ? SlideIn : SlideOut)}
        @media (min-width: 1024px) {
            top: 60px;
        }
    }
`

export default PhoneContact
