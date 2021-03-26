import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Icon from '../components/Thanks/Icon'
import Button from '../components/shared/Button'
import Wrapper from '../components/shared/Wrapper'
import PageTitle from '../components/shared/TextStyle/PageTitle'
import SEO from '../components/shared/seo'


function thanks() {
  return (
    <Layout>
      <SEO title="お問い合わせありがとうございます" description="お問い合わせを受け付けました" noindex={true} />
      <Wrapper>
        <Container>
          <PageTitle jp="お問い合わせありがとうございました" eng="THANKS"/>
          <TextBlockTop>
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
`


const TextBlockTop = styled.div`
  font-size: 15px;
`

export default thanks
