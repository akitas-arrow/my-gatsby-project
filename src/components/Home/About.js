import React from 'react'
import styled from 'styled-components'
import { BasicTextStyle, MediumTextStyle ,Color } from '../shared/style'
import Container from '../shared/Container'
import EnglishHeadlines from '../shared/TextStyle/EnglishHeadlines'
import JapaneseHeadlines from '../shared/TextStyle/JapaneseHeadlines'
import Button from '../shared/Button'
import HeadingBlock from '../shared/TextStyle/HeadingBlock'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

function About() {
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
                    <EnglishHeadlines>ABOUT</EnglishHeadlines>
                    <JapaneseHeadlines>会社案内</JapaneseHeadlines>
                </HeadingBlock>
            </Container>
            <Box>
                <TextBlock>
                    <Text>
                        創業より70年以上、雑貨業に専念してきました。<br/>お客様からの様々なご要望に応じて、ご提案や調達をした品物に満足いただける事が私たちの喜びとなっています。<br/>今後も日々勉強し皆様と共に成長していきます。
                    </Text>
                    <Button slug='/about' bg='white' color='main'>
                        会社案内を見る
                    </Button>
                </TextBlock>
                <ImageBlock>
                    <Img fluid={data.file.childImageSharp.fluid}/>
                </ImageBlock>
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
    }
`

const Box = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
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
    color: ${Color.main};
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
        left: 0;
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

export default About

