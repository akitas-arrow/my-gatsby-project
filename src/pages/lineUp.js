import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Wrapper from '../components/shared/Wrapper'
import Container from '../components/shared/Container'
import PageTitle from '../components/shared/TextStyle/PageTitle'
import LineUpItem from '../components/LineUp/LineUpItem'
import ContactButton from '../components/shared/ContactButton'

function lineUp() {
    const lineUpItems = [
        {
            title: 'ほげほげ洗剤',
            description: '業務用、家庭用を取り扱っております。各メーカーの洗剤を取り揃えており、○○などでご愛用頂いております。',
            items: 'ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤',
            src: 'norostar.png'
        },
        {
            title: 'ほげほげ用品',
            description: '業務用、家庭用を取り扱っております。各メーカーの洗剤を取り揃えており、○○などでご愛用頂いております。',
            items: 'ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤',
            src: 'line-up.jpg'
        },
        {
            title: 'ほげほげ器具',
            description: '業務用、家庭用を取り扱っております。各メーカーの洗剤を取り揃えており、○○などでご愛用頂いております。',
            items: 'ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤',
            src: 'dummy-image.png'
        },
        {
            title: 'ほげほげ類',
            description: '業務用、家庭用を取り扱っております。各メーカーの洗剤を取り揃えており、○○などでご愛用頂いております。',
            items: 'ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤',
            src: 'dummy-image.png'
        },
        {
            title: 'ほげほげ洗剤',
            description: '業務用、家庭用を取り扱っております。各メーカーの洗剤を取り揃えており、○○などでご愛用頂いております。',
            items: 'ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤',
            src: 'dummy-image.png'
        },
    ]
    return (
        <Layout>
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

`

export default lineUp
