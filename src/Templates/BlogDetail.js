import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Wrapper from '../components/shared/Wrapper'
import styled from 'styled-components'
import Button from '../components/shared/Button'
import ContactButton from '../components/shared/ContactButton'
import SEO from '../components/shared/seo'
import TitleBlock from '../components/BlogDetail/TitleBlock'

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
            <SEO
                title={data.microcmsNews.title}
                description={`名古屋市にある家庭用から業務用の洗剤などの日用品や雑貨の卸問屋【トモエ屋】の${data.microcmsNews.title}をお知らせするページです。洗剤やトイレットペーパー、シャンプーなど日用品や雑貨を取り扱っております。`}
                article={true}
            />
            <ContactButton />
            <Wrapper>
                <TitleBlock title={data.microcmsNews.title} date={data.microcmsNews.date}/>
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

const TextBox = styled.div`
    width: 100%;
    max-width: 656px;
    margin: 0 auto;
    line-height: 2;
    h5 {
        margin: 0;
    }
`

export default BlogDetail
