import React from 'react'
import styled from 'styled-components'
import { MediumTextStyle, Color } from '../shared/style'
import Container from '../shared/Container'
import EnglishHeadlines from '../shared/TextStyle/EnglishHeadlines'
import JapaneseHeadlines from '../shared/TextStyle/JapaneseHeadlines'
import Button from '../shared/Button'
import HeadingBlock from '../shared/TextStyle/HeadingBlock'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

function LineUp() {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath:{eq:"dummy-image.png"}) {
                childImageSharp {
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <Wrapper>
            <Container>
                <HeadingBlock>
                    <EnglishHeadlines type='right'>LINE UP</EnglishHeadlines>
                    <JapaneseHeadlines type='right'>取扱商品</JapaneseHeadlines>
                </HeadingBlock>
            </Container>
            <Box>
                <ImageBlock>
                    <Img fluid={data.file.childImageSharp.fluid}/>
                </ImageBlock>
                <TextBlock>
                    <Text>一般家庭用から業務用まで日常使用する雑貨や消耗品を幅広く販売しています。<br/>お探しの物がございましたらお気軽にお問い合わせください。小ロットから迅速にご対応いたします。
                    </Text>
                    <Button slug='/lineUp' bg='white' color='main'>
                        取扱商品を見る
                    </Button>
                </TextBlock>
            </Box>
            <Bg>
            </Bg>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    padding: 72px 24px;
    margin-bottom: 72px;
    @media (min-width: 768px) {
    padding: 120px 24px 72px;
    margin-bottom: 120px;
    }
`

const Box = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
    }
`

const TextBlock = styled.div`
    width: 100%;
    @media (min-width: 1024px) {
        width: calc((100% - 40px) / 2);
    }
`

const Text = styled.p`
    ${MediumTextStyle}
`
const ImageBlock = styled.div`
    width: 100%;
    margin: 48px 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    @media (min-width: 768px) {
        margin: 72px 0;
    }
    @media (min-width: 1024px) {
        margin: 0;
        margin-bottom: 40px;
        width: calc((100% - 40px) / 2);
    }
`

const Bg = styled.div`
        position: absolute;
        bottom: 0;
        background: ${Color.bg};
        right: 0;
        z-index: -1;
        height: 60%;
        width: 100%;
        @media (min-width: 768px) {
            height: 50%;
        }
    @media (min-width:1024px){
        height: calc(100% - 280px);
        width: 90%;
    }
`

export default LineUp

