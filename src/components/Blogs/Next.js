import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {Color, MediumTextStyle} from '../shared/style'

const Next = ({nextPagePath}) => {
  return (
    <Box>
      {
        nextPagePath &&
        <Button to={nextPagePath}>
          次へ&nbsp;
          <FontAwesomeIcon icon="chevron-right" color={Color.main}/>
        </Button>
      }
    </Box>
  )
}

const Box = styled.div`
  width: 81px;
`

const Button = styled(Link)`
  display: block;
  ${MediumTextStyle}
  text-decoration: none;
  font-size: 15px;
  color: ${Color.main};
  border: 2px solid ${Color.main};
  padding: 4px 16px;
`

export default Next
