import React from 'react'
import styled from 'styled-components'
import { Color, BoldTextStyle } from '../components/shared/style'
import Layout from '../components/Layout'
import Wrapper from '../components/shared/Wrapper'
import Container from '../components/shared/Container'
import TableRow from '../components/About/TableRow'
import PageTitle from '../components/shared/TextStyle/PageTitle'
import ProfileImage from '../components/About/ProfileImage'
import ContactButton from '../components/shared/ContactButton'
import SEO from '../components/shared/seo'

function about() {
    const data1 = [
        {
            th: '会社名',
            td:['有限会社トモエ屋']
        },
        {
            th: '所在地', 
            td:['〒453-0063','名古屋市中村区東宿町二丁目１１２番地']
        },
        {
            th: 'TEL', 
            td:['052-412-5166']
        },
        {
            th: 'FAX', 
            td:['052-412-5384']
        },
        {
            th: '創業', 
            td:['昭和21年']
        },
        {
            th: '設立', 
            td:['平成16年6月']
        },
        {
            th: '代表者', 
            td:['瀧　一裕']
        },
        {
            th: '資本金', 
            td:['300万円']
        },
        {
            th: '取引銀行', 
            td:['三菱UFJ銀行　中村公園前支店', '岐阜信用金庫　名古屋支店']
        },
        {
            th: '従業員数', 
            td:['6名']
        },
        {
            th: '業務内容', 
            td:['日用品の卸売業']
        },
    ];
    const data2 = [
        {
            th: '主な取扱メーカー',
            td:['花王、ライオン、Ｐ＆Ｇ、ニイタカ、ユニリーバジャパン、クラシエ、サラヤ、NSファーファジャパン、エステー、小林製薬、熊野油脂、アース製薬、大日本除虫菊、日本製紙クレシア、大王製紙、イトマン、イデシギョー、ユニチャーム、サンスター、エビス、旭化成、クレハ、三菱ケミカル、スリーエムジャパン、昭和電工マテリアルズ、ジャパックス、宇都宮製作、エブノ、ニチネン、大黒工業、尚美堂、遠藤商事、江部松商事、その他']
        },
        {
            th: '主な納入先業種',
            td:['ホテル、レストラン、結婚式場、居酒屋、焼き肉店、ラーメン店、ベーカリー、カフェ、給食事業会社、病院、医院、老人介護施設、障がい者福祉施設、グループホーム、幼稚園、保育園、ビルメンテナンス会社、薬局、ドラッグストア、その他']
        }
    ]

    return (
        <Layout>
            <SEO
                title="会社案内"
                description="名古屋市にある家庭用から業務用の洗剤などの日用品や雑貨の卸問屋【トモエ屋】についてのご紹介ページです。毎日必要な消耗品や日常使用する備品をお値打ち、迅速にお届けいたします。ぜひ弊社を日用品の調達先パートナーとしてご用命ください。"
            />
            <ContactButton />
            <Wrapper paddingBottom='0'>
                <Container>
                    <PageTitle jp='会社案内' eng='ABOUT'/>
                </Container>
            </Wrapper>
            <Wrapper>
                <Container>
                    <MenuTitle>
                        会社概要
                    </MenuTitle>
                    <Tables>
                        <Table>
                            {
                                data1.map((row, index)=> {
                                    return (
                                        <TableRow
                                            key={index}
                                            th={row.th}
                                            td={row.td}
                                        />
                                    )
                                })
                            }
                        </Table>
                        <Table>
                            {
                                data2.map((row, index)=> {
                                    return (
                                        <TableRow
                                            key={index}
                                            th={row.th}
                                            td={row.td}
                                        />
                                    )
                                })
                            }
                        </Table>
                    </Tables>
                </Container>
            </Wrapper>
            <Bg>
                <Hexagon>
                <Container>
                    <MenuTitle>
                        ごあいさつ
                    </MenuTitle>
                    <Box>
                        <ProfileImage />
                        <TextBlock>
                            <p>
                                名古屋市中村区を拠点に洗剤、トイレットペーパー、ポリ袋など日用品を販売する卸問屋です。地の利を生かし地域の小売業をはじめホテル、飲食業の事業所様、病院、介護施設にご利用いただいております。おかげさまで創業70有余年、事業を継続してこられたことはお客様よりご愛顧受け賜りましたおかげと感謝いたします。今後も長年の経験と新鮮な情報の両面から常にお客様の立場になり最適な商品やサービスのご提供に努めてまいります。
                                <br/>
                                毎日必要な消耗品や日常使用する備品の活躍の場は地味ですがなくてはならない物ばかりです。
                                <br/>
                                是非弊社を日用品の調達パートナーとしてご用命ください。
                            </p>
                            {/* <p>
                                代表取締役社長
                                <br/>
                                瀧　一裕
                            </p> */}
                        </TextBlock>
                    </Box>
                </Container>
                </Hexagon>
            </Bg>
        </Layout>
    )
}


const Bg = styled.div`
    z-index: 0;
    width: 100%;
    padding: 72px 0px;
    background: ${Color.gradient};
    overflow: hidden;
    @media (min-width: 1024px) {
        padding: 120px 0px;
    }
`

const Hexagon = styled.div`
    width: 100%;
    height: 100%;
    background: ${Color.white};
    padding: 0 24px;
    position: relative;
    ::before {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: -72px;
        left: 0;
        border-top: 0px solid transparent;
        border-left: 50vw solid transparent;
        border-bottom: 72px solid ${Color.white};
        border-right: 50vw solid transparent;
        @media (min-width: 1024px) {
            top: -120px;
            border-bottom: 120px solid ${Color.white};
        }
    }
    ::after {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        bottom: -72px;
        left: 0;
        border-top: 72px solid ${Color.white};
        border-left: 50vw solid transparent;
        border-bottom: 0px solid transparent;
        border-right: 50vw solid transparent;
        @media (min-width: 1024px) {
            bottom: -120px;
            border-top: 120px solid ${Color.white};
        }
    }
`

const MenuTitle = styled.h4`
    padding-bottom: 48px;
    text-align: center;
    ${BoldTextStyle}
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        padding-bottom: 64px;
        font-size: 26px;
    }
    ::before,::after {
        content: '';
        width: 40px;
        height: 2px;
        background-color:${Color.main};
    }
    ::before {
        margin-right: 16px;
    }
    ::after {
        margin-left: 16px;
    }
`

const Tables = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (min-width: 1025px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

const Table = styled.table`
    margin: 0 auto;
    border: none;
    border-bottom: 1px solid ${Color.bg};
    border-collapse: collapse;
    width: 100%;
    max-width: 608px;
    font-size: 15px;
    @media (min-width:1025px) {
        max-width: none;
        margin: 0;
        width: calc((100% - 80px) / 2);
        font-size: 16px;
    }
    @media (max-width: 480px) {
        border-bottom: none;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 1025px) {
        flex-direction: row-reverse;
        justify-content: space-between;
    }
`

const TextBlock = styled.div`
    margin: 0 auto;
    max-width: 608px;
    font-size: 15px;
    @media (min-width: 1025px) {
        max-width: none;
        margin: 0;
        width: calc((100% - 80px) / 2);
        font-size: 16px;
    }
    /* & p:last-child {
        text-align: right;
        padding-top: 64px;
    } */
`

export default about
