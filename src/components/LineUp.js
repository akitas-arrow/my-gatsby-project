import React from 'react'
import styled from 'styled-components'
import Wrapper from './shared/Wrapper'
import Container from './shared/Container'
import EnglishHeadlines from './shared/TextStyle/EnglishHeadlines'
import JapaneseHeadlines from './shared/TextStyle/JapaneseHeadlines'

function LineUp() {
    return (
        <Wrapper>
            <Container>
                <EnglishHeadlines>LINE UP</EnglishHeadlines>
                <JapaneseHeadlines>取扱商品</JapaneseHeadlines>
            </Container>
        </Wrapper>
    )
}

// const Wrapper = styled.div`
//     padding: 72px 24px;
//     @media (min-width: 768px) {
//     padding: 120px 24px;
//     }
// `

const Background = styled.div`
    width: 100%;
`


export default LineUp
