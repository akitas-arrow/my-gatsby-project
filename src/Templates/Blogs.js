import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Wrapper from '../components/shared/Wrapper'
import Container from '../components/shared/Container'
import PageTitle from '../components/shared/TextStyle/PageTitle'
import styled from 'styled-components'
import BlogItem from '../components/Blogs/BlogItem'
import PaginationButton from '../components/Blogs/PaginationButton'

export const query = graphql`
    query($skip: Int!, $limit: Int!) {
        allMicrocmsNews (
            sort:{fields:date,order:DESC}
            skip: $skip
            limit: $limit
        ){
            edges {
                node {
                    title
                    date(formatString: "YYYY.MM.DD")
                    newsId
                    thumbnail {
                        url
                    }
                }
            }
        }
    }
`

function Blogs({ data, pageContext }) {
    return (
        <Layout>
            <Wrapper paddingBottom='0'>
                <Container>
                    <PageTitle>
                        お知らせ
                    </PageTitle>
                </Container>
            </Wrapper>
            <BlogsWrapper>
                <Container>
                    <Box>
                        {
                            data.allMicrocmsNews.edges.map((edge, index) => {
                                return (
                                    <BlogItem
                                        key={index}
                                        title={edge.node.title}
                                        date={edge.node.date}
                                        url={edge.node.thumbnail.url}
                                        link={`news/${edge.node.newsId}`}
                                    />
                                )
                            })
                        }
                    </Box>
                    <PaginationButton pageContext={pageContext}/>
                </Container>
            </BlogsWrapper>
        </Layout>
    )
}

const BlogsWrapper = styled.div`
    padding: 72px 0px;
    @media (min-width: 768px) {
    padding: 120px 0px;
    }
`

const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default Blogs
