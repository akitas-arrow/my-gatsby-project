import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/shared/Container'
import PageTitle from '../components/Privacy/PageTitle'
import Wrapper from '../components/shared/Wrapper'
import Item from '../components/Privacy/Item'
import SEO from "../components/shared/seo"

function privacy() {
  const data = [
    {
      title:'個人情報保護方針',
      paragraph:'有限会社トモエ屋（以下「当社」という）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。'
    },
    {
      title:'個人情報の管理',
      paragraph:'当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。'
    },
    {
      title:'個人情報の利用目的',
      paragraph:'本ウェブサイトでは、お客様からのお問い合わせ時に、お名前、e-mailアドレス、電話番号等の個人情報をご登録いただく場合がございますが、これらの個人情報はご提供いただく際の目的以外では利用いたしません。お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。'
    },
    {
      title:'個人情報の第三者への開示・提供の禁止',
      paragraph:'当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。',
      lists:[
        'お客さまの同意がある場合',
        'お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合',
        '法令に基づき開示することが必要である場合'
      ]
    },
    {
      title:'個人情報の安全対策',
      paragraph:'当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。'
    },
    {
      title:'ご本人の照会',
      paragraph:'お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。'
    },
    {
      title:'法令、規範の遵守と見直し',
      paragraph:'当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。'
    },
    {
      title:'お問い合せ',
      paragraph:'当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。',
      addresses:['有限会社トモエ屋','〒453-0063','名古屋市中村区東宿町2丁目112番地','TEL 052-412-5166']
    },
  ]
  return (
    <Layout>
      <SEO title="プライバシーポリシー" description="有限会社トモエ屋（以下「当社」という）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。" />
      <Wrapper paddingBottom='0'>
        <Container>
          <PageTitle jp="プライバシーポリシー" eng="PRIVACY POLICY"/>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          {
            data.map((item,index) => {
              return (
                <Item
                  key={index} title={item.title} lists={item.lists}
                  paragraph={item.paragraph} addresses={item.addresses}
                />
              )
            })
          }
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default privacy
