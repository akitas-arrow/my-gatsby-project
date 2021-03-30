import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Color, PhoneNumberStyle } from '../shared/style.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Wrapper from '../shared/Wrapper'
import SNSLinks from '../shared/SNSLinks.js'

function Footer() {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "logo01.svg"}){
                publicURL
            }
            site {
                siteMetadata {
                    url
                }
            }
        }
    `)

    return (
        <Wrapper bg={Color.sheer}>
            <Container>
                <Box>
                    <Logo src={data.file.publicURL} height='56' alt='有限会社トモエ屋' />
                </Box>
                <Box>
                    <AddressBlock>
                        〒453-0063 <br/>
                        名古屋市中村区東宿町2丁目112番地
                    </AddressBlock>
                    <PhoneNumber>
                        <FontAwesomeIcon icon="phone-alt" color={Color.sub}/>
                        &emsp;052-412-5166
                    </PhoneNumber>
                    <PhoneNumber>
                        <FontAwesomeIcon icon="fax" color={Color.sub}/>
                        &emsp;052-412-5384
                    </PhoneNumber>
                </Box>
                <Box>
                    <TextBlock>
                        <span>SNSでも情報発信しています。<br/>是非ご覧ください！</span>
                    </TextBlock>
                    <SNSLinks color="sub"/>
                </Box>
            </Container>
                <BottomBlock>
                    <a
                        href={`${data.site.siteMetadata.url}/privacy`}
                        target="_blank" rel="noopener noreferrer"
                    >
                        プライバシーポリシー
                    </a>
                </BottomBlock>
        </Wrapper>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        text-align: left;
    }
`

const Box = styled.div`
    width: 100%;
    @media (min-width: 768px) {
        width: calc((100% - 80px) / 3);
    }
`

const Logo = styled.img`
    height:48px;
    margin: 0 auto;
    @media (min-width: 768px) {
        height:56px;
        margin: 0;
    }
`

const AddressBlock = styled.p`
    color: ${Color.sub};
    padding: 48px 0 32px 0;
    display:inline-block;
    text-align: left;
    font-size: 15px;
    @media (min-width: 768px) {
        padding: 0;
    }
`

const PhoneNumber = styled.p`
    ${PhoneNumberStyle}
    color:${Color.sub};
    font-size: 18px;
`

const TextBlock = styled.p`
    padding-top: 32px;
    font-size: 15px;
    color: ${Color.sub};
    & span {
        display: inline-block;
    }
    @media (min-width:768px) {
        padding-top: 0;
    }
`

const BottomBlock = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 24px auto 0;
    text-align: center;
    a {
        color: ${Color.sub};
        font-size: 14px;
    }
    @media(min-width: 768px) {
        margin-top: 0;
        text-align: left;
    }
`
export default Footer
