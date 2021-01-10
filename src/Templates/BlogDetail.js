import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Wrapper from '../components/shared/Wrapper'
import Container from '../components/shared/Container'
import PageTitle from '../components/shared/TextStyle/PageTitle'
import styled from 'styled-components'

export const query = graphql`
    query($slug : String!) {
        microcmsNews (newsId: {eq: $slug}){
            title
            createdAt(formatString: "YYYY.MM.DD")
            body
        }
    }
`

function BlogDetail({ data }) {
    return (
        <Layout>
            <Wrapper>
                <Container>
                    <PageTitle>
                        {data.microcmsNews.title}
                    </PageTitle>
                </Container>
            </Wrapper>
            <Wrapper>
                    <TextBox
                        dangerouslySetInnerHTML={{__html: `${data.microcmsNews.body}`}}
                    >
                </TextBox>
            </Wrapper>
        </Layout>
    )
}

const TextBox = styled.div`
    width: 100%;
    max-width: 656px;
    margin: 0 auto;
`

export default BlogDetail
