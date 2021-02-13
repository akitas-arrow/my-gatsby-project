import React from 'react'
import Layout from '../components/Layout'
import Wrapper from '../components/shared/Wrapper'
import Container from '../components/shared/Container'
import PageTitle from '../components/shared/TextStyle/PageTitle'
import Form from '../components/Contact/Form'
import SEO from '../components/shared/seo'
import PhoneContact from '../components/Contact/PhoneContact'

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
      <PhoneContact />
      <Form />
    </Layout>
  )
}

export default contact
