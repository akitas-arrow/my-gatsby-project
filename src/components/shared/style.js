import { css } from 'styled-components'
import "fontsource-noto-sans-jp"
import "fontsource-noto-sans-jp/500.css"
import "fontsource-noto-sans-jp/700.css"

export const Color = {
    letter: '#333333',
    white: '#fff',
    main: '#2b5f60',
    sheer: 'rgba(221,241,226,0.6)',
    sub: '#ddf1e2',
    bg: '#f2f8ef',
    // gradient: 'linear-gradient(90deg, rgba(221,241,226,0.6) 0%, rgba(242,252,254,0.6) 100%)'
    gradient: 'linear-gradient(90deg, rgba(221,241,226,0.6) 0%, rgba(252,255,214,0.6) 100%)',
    gradient02: 'linear-gradient(90deg, rgba(43,95,96,0.45) 0%, rgba(221,241,226,0.6) 30%, rgba(252,255,214,0.6) 100%)',
}

export const BasicTextStyle = css`
    font-family: "Noto Sans JP";
    font-size: 16px;
    line-height: 2em;
    letter-spacing: 0.05em;
    font-weight: 400;
    color: ${Color.letter};
`

export const MediumTextStyle = css`
    ${BasicTextStyle}
    font-weight: 500;
`

export const BoldTextStyle = css`
    ${BasicTextStyle}
    font-weight: 700;
`

export const PhoneNumberStyle = css`
    ${BasicTextStyle}
    color: ${Color.letter};
    font-size: 22px;
    font-weight: 500;
`