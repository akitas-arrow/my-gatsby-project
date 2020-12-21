import React from 'react'
// import styled from 'styled-components'
import Layout from '../components/Layout'
import Wrapper from '../components/shared/Wrapper'
import Container from '../components/shared/Container'
import PageTitle from '../components/shared/TextStyle/PageTitle'
import LineUpItem from '../components/LineUpItem'

function lineUp() {
    const lineUpItems = [
        {
            title: '洗剤00',
            description: '業務用、家庭用を取り扱っております。各メーカーの洗剤を取り揃えており、○○などでご愛用頂いております。',
            items: 'ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤'
        },
        {
            title: '洗剤01',
            description: '業務用、家庭用を取り扱っております。各メーカーの洗剤を取り揃えており、○○などでご愛用頂いております。',
            items: 'ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤'
        },
        {
            title: '洗剤02',
            description: '業務用、家庭用を取り扱っております。各メーカーの洗剤を取り揃えており、○○などでご愛用頂いております。',
            items: 'ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤'
        },
        {
            title: '洗剤03',
            description: '業務用、家庭用を取り扱っております。各メーカーの洗剤を取り揃えており、○○などでご愛用頂いております。',
            items: 'ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤'
        },
        {
            title: '洗剤04',
            description: '業務用、家庭用を取り扱っております。各メーカーの洗剤を取り揃えており、○○などでご愛用頂いております。',
            items: 'ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤'
        },
    ]
    return (
        <Layout>
            <Wrapper paddingBottom='0'>
                <Container>
                    <PageTitle>
                        取扱商品
                    </PageTitle>
                </Container>
            </Wrapper>
            {
                lineUpItems.map((item, index) => {
                    return (
                        <LineUpItem 
                            key={index}
                            title={item.title}
                            description={item.description}
                            items={item.items}
                        />
                    )
                })
            }
        </Layout>
    )
}

export default lineUp
