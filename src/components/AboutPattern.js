import React from 'react'
import styled from 'styled-components'
import { BasicTextStyle, Color } from './shared/style'
// import Wrapper from './shared/Wrapper'
import Container from './shared/Container'
import EnglishHeadlines from './shared/TextStyle/EnglishHeadlines'
import JapaneseHeadlines from './shared/TextStyle/JapaneseHeadlines'
import Button from './shared/Button'

function About() {
    return (
        <>
        <Wrapper>
            <Container>
                <EnglishHeadlines>ABOUT</EnglishHeadlines>
                <JapaneseHeadlines>会社案内</JapaneseHeadlines>
            </Container>
        </Wrapper>
        <BgWrapper>
            <Box>
                <TextBlock>
                        <Text>
                            ○○や○○など、各メーカーの商品を取り揃えております。テキストテキストテキストテキストテキストほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ
                        </Text>
                        <Button>
                            詳細を見る
                        </Button>
                </TextBlock>
            </Box>
        </BgWrapper>
        </>
    )
}

const Wrapper = styled.div`
    padding: 72px 24px 192px;
    @media (min-width: 768px) {
        padding: 120px 24px 192px;
    }
    @media (min-width: 1024px) {
        padding: 120px 24px 56px;
    }
`
const BgWrapper = styled.div`
    /* background-color: ${Color.peacock}; */
    position: relative;
    padding: 192px 24px 72px;
    margin-bottom: 72px;
    @media (min-width: 768px) {
        margin-bottom: 120px;
    }
    @media (min-width: 1024px) {
        padding-top: 72px;
        /* background:  linear-gradient(90deg, ${Color.peacock} 0%, ${Color.peacock} 90%, #fff 90%, #fff 100%); */
    }
    ::before {
        position:absolute;
        content: '';
        width: 90%;
        height: 3px;
        left: 0;
        bottom: 0;
        background-color: ${Color.peacock};
    }
`

const Box = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    width: 100%;
    @media (min-width: 1024px) {
        display: flex;
        justify-content: flex-start;
    }
`

const TextBlock = styled.div`
    position: relative;
    /* background-color: pink; */
    width: 100%;
    @media (min-width: 1024px) {
        width: calc((100% - 40px) / 2);
    }
`

const Text = styled.p`
    ${BasicTextStyle}
    /* color: #fff; */
`

export default About
