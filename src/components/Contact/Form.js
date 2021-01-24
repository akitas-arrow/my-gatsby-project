import React from 'react'
import Wrapper from '../shared/Wrapper'
import styled from 'styled-components'
import {BasicTextStyle, MediumTextStyle, BoldTextStyle, Color} from '../shared/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Form() {
  return (
    <Wrapper>
      <Title>
        <FontAwesomeIcon icon={['far', 'envelope']} color={Color.main} size='2x'/>
        &emsp;お問い合わせフォーム
      </Title>
      <FormBlock>
        <InputItem>
          <Label>
            お名前<Required>必須</Required>
            <Input
              type='text' name='name' id='name' required
            />
            <Ex>例）巴屋　花子</Ex>
          </Label>
        </InputItem>
        <InputItem>
          <Label>
            フリガナ<Required>必須</Required>
            <Input
              type='text' name='furigana' id='furigana' required
              pattern='^[ァ-ヶー　]+$'
            />
            <Ex>例）トモエヤ　ハナコ</Ex>
          </Label>
        </InputItem>
        <InputItem>
          <Label>
            メールアドレス<Required>必須</Required>
            <Input
              type='email' name='email' id='email' required
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'
            />
            <Ex>例）tomoeya-hanako@abc.com</Ex>
          </Label>
        </InputItem>
        <InputItem>
          <Label>
            電話番号<Required>必須</Required>
            <Input
              type='tel' name='tel' id='tel' required
              pattern='\d{2,4}-\d{3,4}-\d{3,4}'
            />
            <Ex>例）052-123-4567</Ex>
          </Label>
        </InputItem>
        <InputItem>
          <Label>
            会社名
            <Input type='text' name='company-name' id='company-name'/>
            <Ex>例）有限会社トモエ屋</Ex>
          </Label>
        </InputItem>
        <InputItem>
          <Label>
            郵便番号
            <Input
              type='text' name='postal-code' id='postal-code'
              pattern='\d{3}-\d{4}'
            />
            <Ex>例）000-0000</Ex>
          </Label>
        </InputItem>
        <InputItem>
          <Label>
            住所
            <Input type='text' name='address' id='address'/>
            <Ex>例）愛知県名古屋市名古屋町00-00</Ex>
          </Label>
        </InputItem>
        <InputItem>
          <Label>
            建物名
            <Input type='text' name='building-name' id='building-name'/>
            <Ex>例）トモエヤビル0階</Ex>
          </Label>
        </InputItem>
        <InputItem>
          <Label>
            問い合わせ内容<Required>必須</Required>
            <Textarea name='message' id='message' required/>
          </Label>
        </InputItem>
        <Button type='submit'>送信する</Button>
      </FormBlock>
    </Wrapper>
  )
}


const FormBlock = styled.form`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
`

const Title = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  ${BoldTextStyle}
  color: ${Color.main};
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

const InputItem = styled.div`
  margin-top: 32px;
`
const Label = styled.label`
  ${BoldTextStyle}
  color: ${Color.main};
`

const Required = styled.span`
  background: ${Color.sub};
  padding: 0 8px;
  margin-left: 16px;
`

const Input = styled.input`
  ${BasicTextStyle}
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
  ${BasicTextStyle}
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

const Button = styled.button`
    text-decoration: none;
    /* position: absolute; */
    /* z-index: 1; */
    margin: 72px auto 0;
    box-sizing: border-box;
    cursor: pointer;
    ${MediumTextStyle}
    display: table;
    color: ${Color.main};
    font-size: 15px;
    height: 56px;
    line-height: 44px;
    padding: 0px 86px 12px 74px;
    background-color: ${Color.sub};
    border: none;
    outline: none;
    position: relative;
    user-select: none;
    transition: all 0.3s;
    ::before {
        border: 2px solid ${Color.main};
        display: block;
        content: "";
        /* z-index: -1; */
        width: 100%;
        height: 100%;
        position: absolute;
        top: -6px;
        left: -6px;
        transition: all 0.3s ease;
    }
    :hover {
        line-height: 56px;
        padding: 0 80px;
    }
    :hover::before {
        top: 0;
        left: 0;
    }
`

export default Form
