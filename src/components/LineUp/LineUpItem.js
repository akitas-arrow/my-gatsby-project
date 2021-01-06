import React from 'react'
import styled from 'styled-components'
import Wrapper from '../shared/Wrapper'
import { MediumTextStyle, BoldTextStyle, Color } from '../shared/style'

function LineUpItem({title, description, items, direction}) {
    return (
        <Wrapper bg={Color.bg}>
            <Box direction={direction}>
                <Image></Image>
                <TextBlock>
                    <Title>
                        {title}
                    </Title>
                    <Text>
                        {description}
                    </Text>
                    <ItemHeader>取扱商品</ItemHeader>
                    <Item>{items}</Item>
                </TextBlock>
            </Box>
        </Wrapper>
    )
}

const Box = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 1024px) {
        flex-direction: ${props => props.direction || 'row-reverse'};
        justify-content: space-between;
    }
`

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
    padding-bottom: 40px;
    ${BoldTextStyle}
    font-size: 18px;
    @media (min-width: 768px) {
        font-size: 26px;
    }
`

const ItemHeader = styled.p`
    ${MediumTextStyle}
    padding-top: 32px;
`

const Text = styled.p`
    padding-bottom: 32px;
    border-bottom: 3px dotted ${Color.main};
`

const Item = styled.p`
    padding-top: 16px;
`
export default LineUpItem
