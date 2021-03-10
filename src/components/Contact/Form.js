import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Wrapper from '../shared/Wrapper'
import styled from 'styled-components'
import {BasicTextStyle, BoldTextStyle, MediumTextStyle, Color} from '../shared/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form'
import {navigate} from 'gatsby'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({"form-name": "contact",...data})
    })
      .then(() => navigate("/thanks/"))
      .catch(() => alert("お問い合わせに失敗しました"));
  };
  const data = useStaticQuery(graphql`
    query {
      site {
          siteMetadata {
              url
          }
      }
    }
  `)
  return (
    <Wrapper>
      <Title>
        <FontAwesomeIcon icon={['far', 'envelope']} color={Color.main} size='2x'/>
        &emsp;お問い合わせフォーム
      </Title>
      <FormBlock
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="form-name" />
        <input type="hidden" name="bot-field" />
        <InputItem>
          <Label>
            お名前<Required>必須</Required>
            <Input
              name='name'
              ref={register({ required: 'お名前を入力してください'})}
            />
            {errors.name && (<Error>{errors.name.message}</Error>)}
            <Ex>例）巴屋　花子</Ex>
          </Label>
        </InputItem>
        <InputItem>
          <Label>
            フリガナ<Required>必須</Required>
            <Input
              name='furigana'
              ref={register({
                required: 'お名前(フリガナ)を入力してください',
                pattern: {
                  value: /^[ァ-ヶー　]+$/,
                  message: '全角カタカナで入力してください'
                }
              })}
            />
            {errors.furigana && (<Error>{errors.furigana.message}</Error>)}
            <Ex>例）トモエヤ　ハナコ</Ex>
          </Label>
        </InputItem>
        <InputItem>
          <Label>
            メールアドレス<Required>必須</Required>
            <Input
              name='email'
              ref={register({
                required: 'メールアドレスを入力してください',
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
                  message: 'メールアドレスを正しく入力してください'
                }
              })}
            />
            {errors.email && (<Error>{errors.email.message}</Error>)}
            <Ex>例）tomoeya-hanako@abc.com</Ex>
          </Label>
        </InputItem>
        <InputItem>
          <Label>
            電話番号<Required>必須</Required>
            <Input
              name='tel'
              ref={register({
                required: '電話番号を入力してください',
                pattern: {
                  value: /\d{2,4}-\d{3,4}-\d{3,4}/,
                  message: 'ハイフンを入れて半角数字で入力してください'
                }
              })}
            />
            {errors.tel && (<Error>{errors.tel.message}</Error>)}
            <Ex>例）052-123-4567</Ex>
          </Label>
        </InputItem>
        <InputItem>
          <Label>
            会社名
            <Input name='company-name' ref={register}/>
            <Ex>例）有限会社トモエ屋</Ex>
          </Label>
        </InputItem>
        <InputItem>
          <Label>
            郵便番号
            <Input
              name='postalCode'
              ref={register({
                pattern: {
                  value: /\d{3}-\d{4}/,
                  message: '郵便番号を正しく入力してください'
                }
              })}
            />
            {errors.postalCode && (<Error>{errors.postalCode.message}</Error>)}
            <Ex>例）000-0000</Ex>
          </Label>
        </InputItem>
        <InputItem>
          <Label>
            住所
            <Input name='address' ref={register}/>
            <Ex>例）愛知県名古屋市名古屋町00-00</Ex>
          </Label>
        </InputItem>
        <InputItem>
          <Label>
            建物名
            <Input name='building-name' ref={register}/>
            <Ex>例）トモエヤビル0階</Ex>
          </Label>
        </InputItem>
        <InputItem>
          <Label>
            問い合わせ内容<Required>必須</Required>
            <Textarea name='message'
            ref={register({
              required: 'お問い合わせ内容を入力してください',
              maxLength : {
                value: 300,
                message: '300文字以内で入力してください'
              }
            })}
            />
            {errors.message && (<Error>{errors.message.message}</Error>)}
          </Label>
        </InputItem>
        <InputItem>
          <Privacy>
          このフォームから送信する個人情報の取り扱いについては「
            <a
              href={`${data.site.siteMetadata.url}/privacy`}
              target="_blank" rel="noopener noreferrer"
            >
              プライバシーポリシー
            </a>
          」をご確認ください。
          </Privacy>
        </InputItem>
        <InputItem className='checkbox'>
          <Label>
            <input
              type="checkbox" name="privacy"
              ref={register({ required: "チェックを入れてください" })}
            />
            個人情報の取扱いについて同意します。
            {errors.privacy && (<Error>{errors.privacy.message}</Error>)}
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
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

const InputItem = styled.div`
  margin-top: 32px;
  &.checkbox {
    text-align: center;
    label {
      cursor: pointer;
    }
  }
`
const Label = styled.label`
  ${BoldTextStyle}
`

const Required = styled.span`
  background: ${Color.bg};
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
  -webkit-appearance: none;
  :focus {
    border: 2px solid ${Color.sub};
    outline: 0;
  }
`

const Ex = styled.p`
  ${MediumTextStyle}
  color: #777;
`

const Error = styled.p`
  ${MediumTextStyle}
  color: #ff6666;
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
  -webkit-appearance: none;
  :focus {
    border: 2px solid ${Color.sub};
    outline: 0;
  }
`

const Privacy = styled.p`
  font-size: 15px;
  a {
    color: ${Color.sub};
  }
`

const Button = styled.button`
    text-decoration: none;
    /* position: absolute; */
    /* z-index: 1; */
    color:${Color.main};
    margin: 72px auto 0;
    box-sizing: border-box;
    cursor: pointer;
    display: table;
    font-size: 15px;
    height: 56px;
    line-height: 44px;
    padding: 0px 86px 12px 74px;
    background-color: ${Color.bg};
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
