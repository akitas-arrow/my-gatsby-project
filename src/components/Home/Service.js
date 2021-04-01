import React from 'react'
import { useInView } from 'react-intersection-observer'
import {BottomIn} from '../shared/keyframes'
import styled,{css} from 'styled-components'
import { BoldTextStyle, Color } from '../shared/style'
import ServiceItem from "./ServiceItem"
import Wrapper from "../shared/Wrapper"
import Container from "../shared/Container"

function Service() {
    const [ref, inView] = useInView({
        rootMargin: '-50px 0px',
        triggerOnce: true,
        threshold: 1
    })
    const items = [
        {
            src: 'service001.png',
            title: 'レストラン・カフェ・居酒屋',
            descriptions: ['万全の衛生対策で楽しく美味しい食を演出'],
        },
        {
            src: 'service002.png',
            title: '給食センター・仕出し',
            descriptions: ['楽しみのランチやお弁当は','徹底した衛生管理から'],
        },
        {
            src: 'service003.png',
            title: 'ホテル・結婚式場',
            descriptions: ['晴れの場もくつろぎの時間も','清潔感でおもてなし'],
        },
        {
            src: 'service004.png',
            title: '学校・幼稚園',
            descriptions: ['健やかに過ごせる安心安全な環境づくり'],
        },
        {
            src: 'service005.png',
            title: '病院・介護施設',
            descriptions: ['清潔で快適な環境づくりをお手伝い'],
        },
    ]
    return (
        <Wrapper>
            <Container>
                <Title ref={ref} inView={inView}>このような方々に<br/>ご利用頂いております</Title>
                <Box>
                    {
                    items.map((item, index) => {
                        return (
                        <ServiceItem
                            key={index}
                            title={item.title}
                            descriptions={item.descriptions}
                            src={item.src}
                        />
                        )
                    })
                    }
                </Box>
            </Container>
        </Wrapper>
    )
}

const animation = css`
    animation: 1s ${BottomIn} ease both;
`

const Title = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${BoldTextStyle}
    font-size: 16px;
    color:${Color.sub};
    /* opacity:${props => props.inView ? 1 : 0}; */
    opacity: 0;
    ${props => (props.inView ? animation : 'animation : 0;')};
    ::before,
    ::after {
        content: '';
        width: 40px;
        height: 2px;
        background-color:${Color.bg};
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
