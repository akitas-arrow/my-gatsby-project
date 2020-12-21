import React from 'react'
import styled from "styled-components"
import EnglishHeadlines from "../shared/TextStyle/EnglishHeadlines"
import { MediumTextStyle } from '../shared/style'
import Button from '../shared/Button'
import Wrapper from '../shared/Wrapper'
import Container from '../shared/Container'
import JapaneseHeadlines from '../shared/TextStyle/JapaneseHeadlines'

function News() {
    return (
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
    )
}

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


export default News
