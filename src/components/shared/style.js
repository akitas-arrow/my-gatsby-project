import { css } from 'styled-components'
import "fontsource-noto-sans-jp"
import "fontsource-noto-sans-jp/500.css"
import "fontsource-noto-sans-jp/700.css"

export const Color = {
    peacock: '#018a9a',
    // lemon: '#FFFBF2',
    lemon: '#f7f06e',
    green: '#6bb6bb',
    yellow: '#f2cf01',
    accents: '#44aeea',
    letter: '#333333',
    white: '#fff',
    main: '#2b5f60',
    bg: '#f2f8ef',
    sub: '#ddf1e2',
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