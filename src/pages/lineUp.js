import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Wrapper from '../components/shared/Wrapper'
import Container from '../components/shared/Container'
import PageTitle from '../components/shared/TextStyle/PageTitle'
import LineUpItem from '../components/LineUp/LineUpItem'
import ContactButton from '../components/shared/ContactButton'
import SEO from '../components/shared/seo'

function lineUp() {
    const lineUpItems = [
        {
            title: '除菌衛生対策品',
            description: '新型コロナウイルスをはじめノロウィルス、食の安全、異物混入、菌による汚染などの事故を未然に防ぎます。',
            items: '薬用ハンドソープ、手指消毒用アルコール、アルコールウェット、ディスポ手袋、マスク、プラスチックガウン　等',
            src: 'norostar.png'
        },
        {
            title: '洗剤各種',
            description: 'プロ仕様のハードな汚れ落としから衣類をやさしく洗い上げる洗剤まで各種取り揃えています。',
            items: '中性洗剤、食器洗い機用洗剤、強力油汚れ用洗剤、バス・トイレ用洗剤、住居用洗剤　洗濯用洗剤　等',
            src: 'line-up.jpg'
        },
        {
            title: '紙製品・ポリ袋',
            description: '業務用の長～いトイレットペーパーや雨の日の傘袋など特殊なものから毎日の定番までお任せください。',
            items: 'トイレット・ティッシュペーパー、ウェットティッシュ、ハンドタオル、キッチンタオル、ゴミ袋、レジ袋、規格袋　等',
            src: 'dummy-image.png'
        },
        {
            title: '厨房関連品',
            description: '業務用仕様の調理道具や器具。ラップや割り箸などの消耗品。グリストラップの清掃品も。',
            items: '調理器具全般、卓上備品、ラップ、アルミホイル、キッチンペーパー、カウンタークロス、真空パック、アルコール製剤、グリストラップ清掃品　等',
            src: 'dummy-image.png'
        },
        {
            title: 'スキンケア・ヘアケア・オーラルケア',
            description: '肌や髪を清潔で健やかに保つことはとても大切なこと。敏感肌や紫外線対策品から介護向け入浴製品も。',
            items: 'ボディソープ、シャンプー、コンディショナー、ハンドソープ、スキンミルク、化粧水、リップクリーム、入浴剤、ハミガキ、ハブラシ、デンタルリンス　等',
            src: 'dummy-image.png'
        },
    ]
    return (
        <Layout>
            <SEO
                title="取扱商品"
                description="名古屋市にある家庭用から業務用の洗剤などの日用品や雑貨の卸問屋【トモエ屋】の取扱商品ページです。洗剤やトイレットペーパー、シャンプーなど日用品や雑貨を取り扱っております。"
            />
            <ContactButton />
            <Wrapper>
                <Container>
                    <PageTitle jp='取扱商品' eng='LINE UP'/>
                </Container>
            </Wrapper>
            <Box>
                {
                    lineUpItems.map((item, index) => {
                        if (index % 2 === 0) {
                            return (
                                <LineUpItem
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    items={item.items}
                                    src={item.src}
                                    color='gradient'
                                />
                            )
                        } else {
                            return (
                                <LineUpItem
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    items={item.items}
                                    src={item.src}
                                    color='white'
                                    direction='row'
                                />
                            )
                        }
                    })
                }
            </Box>
        </Layout>
    )
}

const Box = styled.div`
    margin-bottom: 72px;
`

export default lineUp
