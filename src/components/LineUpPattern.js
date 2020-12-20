import React from 'react'
import styled from 'styled-components'
import { BasicTextStyle, Color } from './shared/style'
// import Wrapper from './shared/Wrapper'
import Container from './shared/Container'
import EnglishHeadlines from './shared/TextStyle/EnglishHeadlines'
import JapaneseHeadlines from './shared/TextStyle/JapaneseHeadlines'
import Button from './shared/Button'

function LineUp() {
    return (
        <>
        <Wrapper>
            <Container>
                <EnglishHeadlines type='right'>LINE UP</EnglishHeadlines>
                <JapaneseHeadlines type='right'>取扱商品</JapaneseHeadlines>
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
        /* background:  linear-gradient(90deg, #fff 0%, #fff 10%, ${Color.peacock} 10%, ${Color.peacock} 100%); */
    }
    ::before {
        position:absolute;
        content: '';
        width: 90%;
        height: 3px;
        right: 0;
        bottom: 0;
        background-color: ${Color.peacock};
    }
`

const Box = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1100px;
    width: 100%;
    @media (min-width: 1024px) {
        display: flex;
        justify-content: flex-end;
    }
`

const TextBlock = styled.div`
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

export default LineUp
