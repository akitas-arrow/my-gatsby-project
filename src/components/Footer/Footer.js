import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Color, BasicTextStyle, MediumTextStyle, PhoneNumberStyle } from '../shared/style.js'
import SNSIconSet from '../shared/SNSIconSet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <ImageStyle src={data.file.publicURL} alt='有限会社トモエ屋' />
                <TextBlock>〒453-0063&emsp;&emsp;&emsp;&emsp;名古屋市中村区東宿町2丁目１１２番地</TextBlock>
                <PhoneNumber>
                    <FontAwesomeIcon icon="phone-alt" color={Color.letter}/>
                    &emsp;052-412-5166
                </PhoneNumber>
                <PhoneNumber>
                    <FontAwesomeIcon icon="fax" color={Color.letter}/>
                    &emsp;052-412-5166
                </PhoneNumber>
                <TextBlock>SNSでも情報発信しています。是非ご覧ください！</TextBlock>
                <PhoneNumber>
                    <SNSIconSet />
                </PhoneNumber>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
`

const Container = styled.div`
    border-top: 3px dotted ${Color.peacock};
    max-width: 1100px;
    margin: 0 auto;
    padding: 112px 0;
`

const ImageStyle = styled.img`
    height:56px;
    margin: 0 auto;
`

const TextBlock = styled.p`
    ${MediumTextStyle}
    text-align: center;
    padding-top: 48px;
`

const PhoneNumber = styled.p`
    text-align: center;
    ${PhoneNumberStyle}
`


export default Footer
