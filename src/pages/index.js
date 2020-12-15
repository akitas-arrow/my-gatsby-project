import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import EnglishHeadlines from "../components/shared/TextStyle/EnglishHeadlines"
import { MediumTextStyle, BoldTextStyle } from '../components/shared/style'
import Button from '../components/shared/Button'

const IndexPage = () => {
  return (
    <Layout>
      <TopImage />
      <Wrapper>
        <Container>
          <EnglishHeadlines>NEWS</EnglishHeadlines>
          <JapaneseHeadlines>お知らせ</JapaneseHeadlines>
          <BlogItem>
            <Date>2020.12.15</Date>
            <Name>1本でどこにでも使える厨房油汚れ洗剤登場！</Name>
          </BlogItem>
          <BlogItem>
            <Date>2020.12.15</Date>
            <Name>サニテートAデザインボトル　ミッフィー&amp;モノトーン入荷！</Name>
          </BlogItem>
          <BlogItem>
            <Date>2020.12.15</Date>
            <Name>名古屋市のトモエ屋です</Name>
          </BlogItem>
          <Button>
            一覧を見る
          </Button>
        </Container>
      </Wrapper>

      <Wrapper>
        <Container>
          <Title>このような方々に<br/>ご利用頂いております</Title>
          
        </Container>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  padding: 72px 24px 0;
  @media (min-width: 768px) {
    padding: 120px 24px 0;
  }
`

const Container = styled.div`
  /* background-color: pink; */
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
`

const TopImage = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f3f3f3;
`

const JapaneseHeadlines = styled.h2`
  ${MediumTextStyle}
  font-size: 15px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`

const BlogItem = styled.div`
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

const Title = styled.h3`
text-align: center;
  ${BoldTextStyle}
  font-size: 22px;
  @media (min-width: 1025px) {
    font-size: 26px;
  }
`

export default IndexPage
