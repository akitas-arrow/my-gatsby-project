import React from 'react'
import styled from 'styled-components'
import Wrapper from './shared/Wrapper'
import Container from './shared/Container'

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
                    <p>取扱商品</p>
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

`

export default LineUpItem
