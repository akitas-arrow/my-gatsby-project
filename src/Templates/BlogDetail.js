import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Wrapper from '../components/shared/Wrapper'
import Container from '../components/shared/Container'
import PageTitle from '../components/shared/TextStyle/PageTitle'

export const query = graphql`
    query($slug : String!) {
        microcmsNews (id: {eq: $slug}){
            title
            createdAt(formatString: "YYYY.MM.DD")
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
        </Layout>
    )
}

export default BlogDetail
