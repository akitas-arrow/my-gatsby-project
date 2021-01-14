import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {Color, MediumTextStyle} from '../shared/style'

const Prev = ({previousPagePath}) => {
  return (
    <Box>
        {
          previousPagePath &&
          <Button to={previousPagePath}>
            <FontAwesomeIcon icon="chevron-left" color={Color.main}/>
            &nbsp;前へ
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

export default Prev
