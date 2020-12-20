import React from 'react'
import styled from 'styled-components'
import { BoldTextStyle, Color } from '../components/shared/style'
import ServiceItem from "./ServiceItem"
import Wrapper from "./shared/Wrapper"
import Container from "./shared/Container"

function Service() {
    const items = [
        {
            src: 'service001.png',
            title: 'レストラン・給食センター',
            description: '万全の衛生対策で楽しく美味しい食を演出',
            color: 'yellow',
        },
        {
            src: 'service002.png',
            title: 'カフェ・パティスリー',
            description: '万全の衛生対策で楽しく美味しい食を演出',
            color: 'peacock',
        },
        {
            src: 'service003.png',
            title: 'ホテル・結婚式場',
            description: '万全の衛生対策で楽しく美味しい食を演出',
            color: 'peacock'
        },
        {
            src: 'service004.png',
            title: '幼稚園・学校',
            description: '万全の衛生対策で楽しく美味しい食を演出',
            color: 'peacock',
        },
        {
            src: 'service005.png',
            title: '病院・介護施設',
            description: '万全の衛生対策で楽しく美味しい食を演出',
            color: 'yellow',
        },
    ]
    return (
        // <Wrapper bg='#FFFBF2'>
        <Wrapper>
            <Container>
                <Title>このような方々に<br/>ご利用頂いております</Title>
                <Box>
                    {
                    items.map((item, index) => {
                        return (
                        <ServiceItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            src={item.src}
                            type={item.color}
                        />
                        )
                    })
                    }
                </Box>
            </Container>
        </Wrapper>
    )
}

const Title = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${BoldTextStyle}
    font-size: 16px;
    ::before,
    ::after {
        content: '';
        width: 40px;
        height: 2px;
        background-color:${Color.peacock};
    }
    ::before {
        transform: rotate(68deg);
    }
    ::after {
        transform: rotate(-68deg);
    }
    @media (min-width: 768px) {
        font-size: 22px;
        ::before,
        ::after {
        width: 75px;
        height: 3px;
        }
        ::before {
        transform: rotate(60deg);
        }
        ::after {
        transform: rotate(-60deg);
        }
    }
    @media (min-width: 1025px) {
        font-size: 26px;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    @media (min-width: 1024px) {
        ::after {
        content: '';
        display: block;
        width: calc((100% - 80px) / 3);
        }
    }
`

export default Service
