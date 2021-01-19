import React from 'react'
import Wrapper from '../shared/Wrapper'
import styled from 'styled-components'
import {BasicTextStyle, MediumTextStyle, BoldTextStyle, Color} from '../shared/style'

function Form() {
  return (
    <Wrapper>
      <FormBlock>
        <InputItem>
          <label>
            <Header>お名前<Required>必須</Required></Header>
            <Input/>
            <Ex>例）巴屋　花子</Ex>
          </label>
        </InputItem>
        <InputItem>
          <label>
            <Header>フリガナ<Required>必須</Required></Header>
            <Input/>
            <Ex>例）トモエヤ　ハナコ</Ex>
          </label>
        </InputItem>
        <InputItem>
          <label>
            <Header>メールアドレス<Required>必須</Required></Header>
            <Input/>
            <Ex>例）tomoeya-hanako@abc.com</Ex>
          </label>
        </InputItem>
        <InputItem>
          <label>
            <Header>電話番号<Required>必須</Required></Header>
            <Input/>
            <Ex>例）052-123-4567</Ex>
          </label>
        </InputItem>
        <InputItem>
          <label>
            <Header>会社名</Header>
            <Input/>
            <Ex>例）有限会社トモエ屋</Ex>
          </label>
        </InputItem>
        <InputItem>
          <label>
            <Header>住所</Header>
            <Input/>
            <Ex>例）愛知県名古屋市名古屋町00-00</Ex>
          </label>
        </InputItem>
        <InputItem>
          <label>
            <Header>建物名</Header>
            <Input/>
            <Ex>例）トモエヤビル0階</Ex>
          </label>
        </InputItem>
        <InputItem>
          <label>
            <Header>問い合わせ内容<Required>必須</Required></Header>
            <Textarea/>
          </label>
        </InputItem>
      </FormBlock>
    </Wrapper>
  )
}


const FormBlock = styled.form`
  width: 100%;
  max-width: 680px;
  /* background:pink; */
  margin: 0 auto;
`

const InputItem = styled.div`
  margin-top: 32px;
`

const Header = styled.div`
  ${BoldTextStyle}
  color: ${Color.main};
`

const Required = styled.span`
  background: ${Color.sub};
  padding: 0 8px;
  margin-left: 16px;
`

const Input = styled.input`
  width: 100%;
  padding: 4px 8px;
  border-radius: 3px;
  border: 2px solid #ddd;
  box-sizing: border-box;
  :focus {
    border: 2px solid ${Color.main};
    outline: 0;
  }
`

const Ex = styled.p`
  ${MediumTextStyle}
  color: #777;
`

const Textarea = styled.textarea`
  width: 100%;
  height: 20em;
  resize: none;
  padding: 4px 8px;
  border-radius: 3px;
  border: 2px solid #ddd;
  box-sizing: border-box;
  :focus {
    border: 2px solid ${Color.main};
    outline: 0;
  }
`

export default Form
