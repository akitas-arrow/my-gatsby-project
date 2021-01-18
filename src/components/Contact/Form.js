import React from 'react'
import Wrapper from '../shared/Wrapper'
import Container from '../shared/Container'
import styled from 'styled-components'
import {BoldTextStyle, Color} from '../shared/style'

function Form() {
  return (
    <Wrapper>
      <Container>
        <form>
          <div>
            <Label>
              お名前
              <Required>必須</Required>
              <input/>
            </Label>
          </div>
          <div>
            <Label>
              フリガナ
              <Required>必須</Required>
              <input/>
            </Label>
          </div>
          <div>
            <Label>
              会社名
              <input/>
            </Label>
          </div>
          <div>
            <Label>
              メールアドレス
              <Required>必須</Required>
              <input/>
            </Label>
          </div>
          <div>
            <Label>
              電話番号
              <input/>
            </Label>
          </div>
          <div>
            <Label>
              郵便番号<span>〒</span>
              <input/>
            </Label>
          </div>
          <div>
            <Label>
              住所
              <input/>
            </Label>
          </div>
          <div>
            <Label>
              建物名
              <input/>
            </Label>
          </div>
          <div>
            <Label>
              お問い合わせ内容
              <Required>必須</Required>
              <textarea/>
            </Label>
          </div>
        </form>
      </Container>
    </Wrapper>
  )
}

const Label = styled.label`
  ${BoldTextStyle}
  color: ${Color.main};
`

const Required = styled.span`
  background: ${Color.sub};
`

export default Form
