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
            title: '洗剤00',
            description: '業務用、家庭用を取り扱っております。各メーカーの洗剤を取り揃えており、○○などでご愛用頂いております。',
            items: 'ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤',
            src: 'dummy-image.png'
        },
        {
            title: '洗剤01',
            description: '業務用、家庭用を取り扱っております。各メーカーの洗剤を取り揃えており、○○などでご愛用頂いております。',
            items: 'ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤',
            src: 'dummy-image.png'
        },
        {
            title: '洗剤02',
            description: '業務用、家庭用を取り扱っております。各メーカーの洗剤を取り揃えており、○○などでご愛用頂いております。',
            items: 'ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤',
            src: 'dummy-image.png'
        },
        {
            title: '洗剤03',
            description: '業務用、家庭用を取り扱っております。各メーカーの洗剤を取り揃えており、○○などでご愛用頂いております。',
            items: 'ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤、ほげほげ洗剤',
            src: 'dummy-image.png'
        },
        {
            title: '洗剤04',
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
                                    color='sheer'
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
