import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import News from "../components/News"
import { BoldTextStyle, Color } from '../components/shared/style'
import ServiceItem from "../components/ServiceItem"

const IndexPage = () => {
  const items = [
    {
      src: 'service001.png',
      title: 'レストラン・給食センター',
      description: '万全の衛生対策で楽しく美味しい食を演出',
    },
    {
      src: 'service002.png',
      title: 'カフェ・パティスリー',
      description: '万全の衛生対策で楽しく美味しい食を演出',
    },
    {
      src: 'service003.png',
      title: 'ホテル・結婚式場',
      description: '万全の衛生対策で楽しく美味しい食を演出',
    },
    {
      src: 'service004.png',
      title: '幼稚園・学校',
      description: '万全の衛生対策で楽しく美味しい食を演出',
    },
    {
      src: 'service005.png',
      title: '病院・介護施設',
      description: '万全の衛生対策で楽しく美味しい食を演出',
    },
  ]

  return (
    <Layout>
      <TopImage />
      <News />
      <Wrapper>
        <Container>
          <Title>このような方々に<br/>ご利用頂いております</Title>
          {
            items.map((item, index) => {
              return (
                <ServiceItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  src={item.src}
                />
              )
            })

          }
        </Container>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  padding: 72px 24px;
  @media (min-width: 768px) {
    padding: 120px 24px;
  }
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
`

const TopImage = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f3f3f3;
`

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

export default IndexPage
