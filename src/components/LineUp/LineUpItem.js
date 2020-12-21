import React from 'react'
import styled from 'styled-components'
import Wrapper from '../shared/Wrapper'
import Container from '../shared/Container'
import {MediumTextStyle, BoldTextStyle} from '../shared/style'

function LineUpItem({title, description, items}) {
    return (
        <Wrapper>
            <Container>
                <Image></Image>
                <TextBlock>
                    <Title>
                        {title}
                    </Title>
                    <p>
                        {description}
                    </p>
                    <ItemHeader>取扱商品</ItemHeader>
                    <p>{items}</p>
                </TextBlock>
            </Container>
        </Wrapper>
    )
}

const Image = styled.div`
    max-width:608px;
    margin: 0 auto;
    @media (min-width: 1024px) {
        margin: 0;
        max-width: none;
        width: calc((100% - 40px) / 2);
    }
`

const TextBlock = styled.div`
    max-width:608px;
    margin: 0 auto;
    @media (min-width: 1024px) {
        margin: 0;
        max-width: none;
        width: calc((100% - 40px) / 2);
    }
`

const Title = styled.h4`
    /* padding-top: 72px; */
    padding-bottom: 48px;
    /* text-align: center; */
    ${BoldTextStyle}
    font-size: 18px;
    @media (min-width: 768px) {
        /* padding-top: 112px; */
        padding-bottom: 64px;
        font-size: 26px;
    }
`

const ItemHeader = styled.p`
    ${MediumTextStyle}
`

export default LineUpItem
