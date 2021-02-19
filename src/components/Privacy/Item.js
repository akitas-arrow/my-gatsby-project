import React from 'react'
import styled from 'styled-components'
import {BoldTextStyle, Color} from '../shared/style'

function Item({title, paragraph, lists, addresses}) {
  return (
      <Box>
        <Title>{title}</Title>
        <Text>{paragraph}</Text>
        {lists && (
          <ListBlock>
            {
              lists.map((list,index) => {
                return (
                  <List key={index}>{list}</List>
                )
              })
            }
          </ListBlock>
        )}
        {addresses && (
          <AddressListBlock>
            {addresses.map((address,index) => {
              return(
                <Address key={index}>{address}</Address>
              )
            })}
          </AddressListBlock>
        )}
      </Box>
  )
}

const Box = styled.div`
  padding-top: 40px;
  @media(min-width: 768px) {
    padding-top: 72px;
  }
  &:first-child {
    padding-top: 0;
  }
`

const Title = styled.h2`
  ${BoldTextStyle}
  font-size: 18px;
`

const Text = styled.p`
  font-size: 15px;
  @media(min-width: 768px) {
    font-size: 16px;
  }
`
const ListBlock = styled.ul`
  padding-inline-start: 20px;
`

const List = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  text-indent: -1em;
  &::before {
    content:'';
    width: 10px;
    height: 10px;
    background-color: ${Color.sub};
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;
  }
`

const AddressListBlock = styled.ul`
  padding-inline-start: 0;
  margin-top: 32px;
`



const Address = styled.li`
  list-style: none;
`

export default Item
