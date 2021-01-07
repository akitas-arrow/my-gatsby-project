import React from 'react'
import styled from 'styled-components'
// import Wrapper from '../shared/Wrapper'
import { MediumTextStyle, BoldTextStyle, Color } from '../shared/style'

function LineUpItem({title, description, items, direction}) {
    return (
        <>
        <Wrapper direction={direction}>
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
        </>
    )
}

const Wrapper = styled.div`
    width: 100%;
    background-color: ${Color.bg};
    overflow: hidden;
    padding: 72px 24px;
    position: relative;
    @media (min-width: 1024px) {
        padding: 120px 24px;
    }
    ::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        border-top: 72px solid ${Color.white};
        border-left: 100vw solid transparent;
        &[direction='row'] {
            border-top: 72px solid ${Color.white};
            border-left: none;
            border-right: 100vw solid transparent;
        }
        @media (min-width: 1024px) {
            border-top: 120px solid ${Color.white};
        }
    }
    ::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 72px solid ${Color.white};
        border-right: 100vw solid transparent;
        @media (min-width: 1024px) {
            border-bottom: 120px solid ${Color.white};
        }
    }
`

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
