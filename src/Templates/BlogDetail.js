import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Wrapper from '../components/shared/Wrapper'
import Container from '../components/shared/Container'
import styled from 'styled-components'
import {MediumTextStyle,BoldTextStyle, Color} from '../components/shared/style'
import Button from '../components/shared/Button'
import ContactButton from '../components/shared/ContactButton'

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
            <ContactButton />
            <Wrapper>
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
                <Img src={`${data.microcmsNews.thumbnail.url}?fit=clip&h=520`} />
                <TextBox
                    dangerouslySetInnerHTML={{__html: `${data.microcmsNews.body}`}}
                >
                </TextBox>
                <Button slug='/news'>記事一覧に戻る</Button>
            </Wrapper>
        </Layout>
    )
}

const Img = styled.img`
    margin: 48px auto;
`
const TitleBlock = styled.div`
    width: 100%;
`

const Title = styled.h2`
    ${BoldTextStyle}
    color: ${Color.main};
    font-size: 22px;
    @media (min-width: 768px) {
        font-size: 30px;
    }
`

const Date = styled.p`
    ${MediumTextStyle}
    color: ${Color.main};
`

const TextBox = styled.div`
    width: 100%;
    max-width: 656px;
    margin: 0 auto;
`

export default BlogDetail
