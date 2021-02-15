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
        }
    `)

    return (
        <Wrapper bg={Color.sheer}>
            <Container>
                <Box>
                    <Logo src={data.file.publicURL} alt='有限会社トモエ屋' />
                    <AddressBlock>
                        〒453-0063 <br/>
                        名古屋市中村区東宿町2丁目112番地
                    </AddressBlock>
                </Box>
                <Box>
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
    padding: 48px 0 40px 0;
    display:inline-block;
    text-align: left;
    @media (min-width: 768px) {
        padding: 24px 0 0 0;
    }
`

const PhoneNumber = styled.p`
    ${PhoneNumberStyle}
    color:${Color.sub};
`

const TextBlock = styled.p`
    padding-top: 48px;
    font-size: 15px;
    color: ${Color.sub};
    & span {
        display: inline-block;
    }
    @media (min-width:768px) {
        padding-top: 0;
    }
`
export default Footer
