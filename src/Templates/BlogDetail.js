import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Wrapper from '../components/shared/Wrapper'
import Container from '../components/shared/Container'
import styled from 'styled-components'
import {MediumTextStyle,BoldTextStyle, Color} from '../components/shared/style'
import Button from '../components/shared/Button'

export const query = graphql`
    query($slug : String!) {
        microcmsNews (newsId: {eq: $slug}){
            title
            date(formatString: "YYYY.MM.DD")
            body
            thumbnail{
                url
            }
        }
    }
`

function BlogDetail({ data }) {
    return (
        <Layout>
            <TopWrapper>
                    <Img src={`${data.microcmsNews.thumbnail.url}?fit=crop&w=1100&h=480`} />
                    <TitleBlock>
                        <Container>
                            <Date>
                                {data.microcmsNews.date}
                            </Date>
                            <Title>
                                {data.microcmsNews.title}
                            </Title>
                        </Container>
                    </TitleBlock>
            </TopWrapper>
            <Wrapper>
                    <TextBox
                        dangerouslySetInnerHTML={{__html: `${data.microcmsNews.body}`}}
                    >
                </TextBox>
                <Button slug='/news'>記事一覧に戻る</Button>
            </Wrapper>
        </Layout>
    )
}

const TopWrapper = styled.div`
    padding-top: 72px;
    position: relative;
    @media (min-width: 768px) {
    padding-top: 120px;
    }
`

const Img = styled.img`
    margin: 0 auto;
`
const TitleBlock = styled.div`
    position: absolute;
    bottom: 0px;
    transform: translateY(50%);
    width: 100%;
    padding: 0 24px;
    background:  linear-gradient(90deg, rgba(221,241,226,0.75) 0%, rgba(221,241,226,0.75) 90%, transparent 90%, transparent 100%);
`

const Title = styled.h2`
    width: 90%;
    ${BoldTextStyle}
    color: ${Color.main};
    font-size: 22px;
    @media (min-width: 768px) {
        font-size: 30px;
    }
`

const Date = styled.p`
    width: 90%;
    ${MediumTextStyle}
    color: ${Color.main};
`

const TextBox = styled.div`
    width: 100%;
    max-width: 656px;
    margin: 0 auto;
`

export default BlogDetail
