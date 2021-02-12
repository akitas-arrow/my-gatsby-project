import React from 'react'
import { useInView } from 'react-intersection-observer'
import Layout from '../components/Layout'
import Wrapper from '../components/shared/Wrapper'
import Container from '../components/shared/Container'
import PageTitle from '../components/shared/TextStyle/PageTitle'
import styled,{css} from 'styled-components'
import { PhoneNumberStyle, Color, BoldTextStyle } from '../components/shared/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form from '../components/Contact/Form'
import SEO from '../components/shared/seo'

function contact() {
  return (
    <Layout>
      <SEO
        title="お問い合わせ"
        description="名古屋市にある家庭用から業務用の洗剤などの日用品や雑貨の卸問屋【トモエ屋】へのご注文は電話・FAX・メールにて受け付けております。全て自社便で配達するため、送料がかからずお値打ちです。対応地域はこちらからご確認ください。また、お問い合わせもこちらのページより承っております。"
      />
      <Wrapper paddingBottom='32px'>
        <Container>
          <PageTitle jp='お問い合わせ' eng='CONTACT'/>
        </Container>
      </Wrapper>
      <Bg>
        <Container>
          <TextBlock>
            <MenuTitle>お電話でのお問い合わせ</MenuTitle>
            <PhoneNumber>
              <FontAwesomeIcon icon="phone-alt" color={Color.main}/>
              &emsp;052-412-5166
            </PhoneNumber>
            <p>平日8:00ー17:00</p>
          </TextBlock>
        </Container>
      </Bg>
      <Form />
    </Layout>
  )
}

const TextBlock = styled.div`
  ${BoldTextStyle}
  text-align: center;
`

const MenuTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`
const PhoneNumber = styled.p`
    ${PhoneNumberStyle}
    @media (min-width:768px) {
      font-size: 26px;
    }
`

const Bg = styled.div`
    z-index: 0;
    width: 100%;
    padding: 72px 24px;
    position: relative;
    ::before {
        content: "";
        position: absolute;
        top: 0; bottom: 0; left: 0; right: 0;
        z-index: -1;
        background:${Color.gradient};
        transform: skewY(-5deg);
    }
`
export default contact
