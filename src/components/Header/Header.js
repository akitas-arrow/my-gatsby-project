import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Color, HeadingStyle, SpHeadingStyle ,BasicTextStyle} from '../shared/style.js'
import "fontsource-noto-sans-jp/500.css"
import "fontsource-noto-sans-jp/700.css"

function Header() {
    return (
        <Wrapper>
            <Title>Header</Title>
            <FontAwesomeIcon icon="phone-alt" color={Color.lemon}/>
            <FontAwesomeIcon icon="fax" color={Color.green}/>
            <FontAwesomeIcon icon={['fab', 'youtube']} color={Color.yellow}/>
            <FontAwesomeIcon icon={['fab', 'instagram']} color={Color.accents}/>
            <FontAwesomeIcon icon={['far', 'envelope']} color={Color.letter}/>
            <Text04>400R</Text04>
            <Text05>500M</Text05>
            <Text07>700B</Text07>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    /* background-color:${Color.peacock}; */
`

const Title = styled.h1`
    ${SpHeadingStyle}
    @media (min-width: 769px) {
        ${HeadingStyle}
    }
`

const Text04 = styled.p`
    ${BasicTextStyle}
    font-size: 40px;
    font-weight: 400;
`
const Text05 = styled.p`
    ${BasicTextStyle}
    font-size: 40px;
    font-weight: 500;
`

const Text07 = styled.p`
    ${BasicTextStyle}
    font-size: 40px;
    font-weight: 700;
`


export default Header
