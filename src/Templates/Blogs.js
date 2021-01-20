import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Wrapper from '../components/shared/Wrapper'
import Container from '../components/shared/Container'
import PageTitle from '../components/shared/TextStyle/PageTitle'
import styled from 'styled-components'
import BlogItem from '../components/Blogs/BlogItem'
import Pagination from '../components/Blogs/Pagination'
import ContactButton from '../components/shared/ContactButton'
import SpPagination from '../components/Blogs/SpPagination'

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
            <ContactButton />
            <Wrapper paddingBottom='0'>
                <Container>
                    <PageTitle jp='お知らせ' eng='NEWS'/>
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
                    <PaginationBlock>
                        <Pagination pageContext={pageContext}/>
                    </PaginationBlock>
                    <SpPaginationBlock>
                        <SpPagination pageContext={pageContext}/>
                    </SpPaginationBlock>
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

const PaginationBlock = styled.div`
    display: none;
    @media (min-width:768px){
        display: flex;
        justify-content: center;
    }
`

const SpPaginationBlock = styled.div`
    display: flex;
    padding: 0 24px;
    justify-content: space-between;
    @media (min-width:768px){
        display: none;
    }
`

export default Blogs
