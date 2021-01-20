import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Color, MediumTextStyle, PhoneNumberStyle } from '../shared/style.js'
import SNSIconSet from '../shared/SNSIconSet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Wrapper from '../shared/Wrapper'

function Footer() {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "logo01.svg"}){
                publicURL
            }
        }
    `)

    return (
        <Wrapper>
            <Container>
                <Logo src={data.file.publicURL} alt='有限会社トモエ屋' />
                <AddressBlock>
                    〒453-0063 <br/>
                    <span>&emsp;&emsp;&emsp;&emsp;</span>
                    名古屋市中村区東宿町2丁目112番地
                </AddressBlock>
                <PhoneNumber>
                    <FontAwesomeIcon icon="phone-alt" color={Color.letter}/>
                    &emsp;052-412-5166
                </PhoneNumber>
                <PhoneNumber>
                    <FontAwesomeIcon icon="fax" color={Color.letter}/>
                    &emsp;052-412-5166
                </PhoneNumber>
                <TextBlock>
                    <span>SNSでも情報発信しています。</span>
                    <span>是非ご覧ください！</span>
                </TextBlock>
                <Icons>
                    <SNSIconSet
                        color='letter'
                    />
                </Icons>
            </Container>
        </Wrapper>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
`

const Logo = styled.img`
    height:48px;
    margin: 0 auto;
    @media (min-width: 768px) {
        height:56px;
    }
`

const AddressBlock = styled.p`
    ${MediumTextStyle}
    padding: 48px 0 40px 0;
    display:inline-block;
    text-align: left;
    & br {
        @media (min-width: 768px) {
            display: none;
        }
    }
    & span {
        display: none;
        @media (min-width: 768px) {
            display: inline;
        }
    }
`

const PhoneNumber = styled.p`
    ${PhoneNumberStyle}
`

const TextBlock = styled.p`
    ${MediumTextStyle}
    padding-top: 48px;
    font-size: 15px;
    & span {
        display: inline-block;
    }
`

const Icons = styled.div`
    padding-top: 24px;
    font-size: 40px;
`
export default Footer
