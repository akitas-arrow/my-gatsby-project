import React from 'react'
import styled from 'styled-components'
import "modern-css-reset"
import { MediumTextStyle, BoldTextStyle } from '../components/shared/style'
import Icon from '../components/Thanks/Icon'
import Button from '../components/shared/Button'

function thanks() {
  return (
    <Wrapper>
      <Container>
        <TextBlockTop>
          <Title>
            <span>お問い合わせ</span><span>ありがとうございました。</span>
          </Title>
          <Icon/>
          <p>
            ご入力いただいた内容を確認後、担当者より改めてご返信いたします。<br/>
            ご連絡までしばらくお待ちください。
          </p>
        </TextBlockTop>
        <Button slug="/">
          TOPに戻る
        </Button>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${MediumTextStyle}
  padding: 0 24px;
  display: flex;
  height: 100vh;
  align-items: center;
  text-align: center;
`

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 608px;
  span {
    display: inline-block;
  }
`

const Title = styled.h2`
  ${BoldTextStyle}
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

const TextBlockTop = styled.div`
  font-size: 15px;
`

export default thanks
