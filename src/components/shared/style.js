import { css } from 'styled-components'
import "fontsource-noto-sans-jp/500.css"
import "fontsource-noto-sans-jp/700.css"

export const Color = {
    white: '#fff',
    main: '#24504a',
    sub: '#3db695',
    bg: '#c5ede3',
    sheer: 'rgba(197, 237, 227, 0.3)',
    gradient: 'linear-gradient(90deg, rgba(197,237,227,1) 0%, rgba(242,252,254,1) 100%)',
}

export const MediumTextStyle = css`
    font-family: "Noto Sans JP";
    font-size: 16px;
    line-height: 2em;
    letter-spacing: 0.05em;
    font-weight: 500;
    color: ${Color.main};
`

export const BoldTextStyle = css`
    ${MediumTextStyle}
    font-weight: 700;
`

export const PhoneNumberStyle = css`
    ${MediumTextStyle}
    font-size: 22px;
    font-weight: 500;
`