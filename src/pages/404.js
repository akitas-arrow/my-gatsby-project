import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/shared/seo"
import Wrapper from '../components/shared/Wrapper'
import Container from '../components/shared/Container'
import Button from '../components/shared/Button'
import styled from 'styled-components'
import HeadingBlock from '../components/shared/TextStyle/HeadingBlock'
import EnglishHeadlines from "../components/shared/TextStyle/EnglishHeadlines"
import JapaneseHeadlines from "../components/shared/TextStyle/JapaneseHeadlines"
function NotFound() {
    return (
        <Layout>
            <SEO title="404 Not Found" description="ページが見つかりません" />
            <Wrapper>
              <Container>
                <HeadingBlock>
                  <EnglishHeadlines>404</EnglishHeadlines>
                  <JapaneseHeadlines>ページが見つかりません</JapaneseHeadlines>
                </HeadingBlock>
                <TextBlock>
                  <p>お探しのページが見つかりません。<br/>
                  一時的にアクセスできない状況にあるか、移動もしくは削除された可能性があります。</p>
                </TextBlock>
                <Button slug="/">トップページへ</Button>
              </Container>
            </Wrapper>
        </Layout>
    )
}

const TextBlock = styled.div`
  padding-top: 72px;
`


export default NotFound