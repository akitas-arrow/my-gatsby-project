import React from 'react'
import styled from 'styled-components'
import { BoldTextStyle } from '../components/shared/style'
import Layout from '../components/Layout'
import Icon from '../components/Thanks/Icon'
import Button from '../components/shared/Button'
import Wrapper from '../components/shared/Wrapper'


function thanks() {
  return (
    <Layout>
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
            トップページへ
          </Button>
        </Container>
      </Wrapper>
    </Layout>
  )
}

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 608px;
  text-align: center;
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
