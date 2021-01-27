import { css } from 'styled-components'
import "fontsource-noto-sans-jp"
import "fontsource-noto-sans-jp/500.css"
import "fontsource-noto-sans-jp/700.css"

export const Color = {
    letter: '#333333',
    white: '#fff',
    main: '#24504a',
    sub: '#3db695',
    bg: '#c5ede3',
    sheer: 'rgba(197, 237, 227, 0.5)',
    // gradient: 'linear-gradient(90deg, rgba(221,241,226,1) 0%, rgba(242,252,254,1) 100%)',
    gradient: 'linear-gradient(135deg, rgba(197,237,227,1) 0%, rgba(242,252,254,1) 100%)',
    // gradient: 'linear-gradient(135deg, rgba(197,237,227,0.5) 50%, rgba(61,182,149,0.4) 100%)'
}

export const BasicTextStyle = css`
    font-family: "Noto Sans JP";
    font-size: 16px;
    line-height: 2em;
    letter-spacing: 0.05em;
    font-weight: 400;
    color: ${Color.main};
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
    color: ${Color.main};
    font-size: 22px;
    font-weight: 500;
`