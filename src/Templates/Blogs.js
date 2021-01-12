import React from 'react'
import Layout from '../components/Layout'
import Wrapper from '../components/shared/Wrapper'
import Container from '../components/shared/Container'
import PageTitle from '../components/shared/TextStyle/PageTitle'

function Blogs() {
    return (
        <Layout>
            <Wrapper>
                <Container>
                    <PageTitle>
                        お知らせ
                    </PageTitle>
                </Container>
            </Wrapper>
        </Layout>
    )
}

export default Blogs
