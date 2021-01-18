import React from 'react'
import Wrapper from '../shared/Wrapper'
import Container from '../shared/Container'

function Form() {
  return (
    <Wrapper>
      <Container>
        <form>
          <div>
            <label>お名前</label>
            <input/>
          </div>
          <div>
            <label>フリガナ</label>
            <input/>
          </div>
          <div>
            <label>メールアドレス</label>
            <input/>
          </div>
          <div>
            <label>電話番号</label>
            <input/>
          </div>
          <div>
            <label>郵便番号</label>
            <input/>
          </div>
          <div>
            <label>住所</label>
            <input/>
          </div>
          <div>
            <label>建物名</label>
            <input/>
          </div>
          <div>
            <label>お問い合わせ内容</label>
            <input/>
          </div>
        </form>
      </Container>
    </Wrapper>
  )
}

export default Form
