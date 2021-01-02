import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import EnglishHeadlines from "../shared/TextStyle/EnglishHeadlines"
import Button from '../shared/Button'
import Wrapper from '../shared/Wrapper'
import Container from '../shared/Container'
import JapaneseHeadlines from '../shared/TextStyle/JapaneseHeadlines'
import BlogItem from './BlogItem'
import HeadingBlock from '../shared/TextStyle/HeadingBlock'

function News() {
    const data = useStaticQuery(graphql`
        query {
            allMicrocmsNews (
                sort:{
                    fields:[createdAt],
                    order:DESC,
                },
                limit:3
            ){
                edges {
                    node {
                        title
                        createdAt(formatString: "YYYY.MM.DD")
                        id
                    }
                }
            }
        }
    `)

    return (
        <Wrapper>
            <Container>
                <HeadingBlock>
                    <EnglishHeadlines>NEWS</EnglishHeadlines>
                    <JapaneseHeadlines>お知らせ</JapaneseHeadlines>
                </HeadingBlock>
                {
                    data.allMicrocmsNews.edges.map((edge, index) => {
                        return (
                            <BlogItem
                                key={index}
                                title={edge.node.title}
                                date={edge.node.createdAt}
                                link={`news/${edge.node.id}`}
                            />
                        )
                    })
                }
                <Button>
                一覧を見る
                </Button>
            </Container>
    </Wrapper>
    )
}


export default News
