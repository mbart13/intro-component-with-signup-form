import React from 'react'

import styled from 'styled-components'
import { rgba } from 'polished'
import iconError from 'assets/images/icon-error.svg'

const Wrapper = styled.div`
  margin-bottom: 1rem;

  input {
    width: 100%;
    color: ${({ theme }) => theme.colors.darkBlue};
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    padding: 1rem;
    border-radius: 5px;

    :focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.blue};
      border-radius: 5px;
    }

    ::placeholder {
      font-size: 0.875rem;
      color: ${({ theme }) => rgba(theme.colors.darkBlue, 0.75)};
      font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    }
  }
`

const FormField = ({ type, label }) => {
  return (
    <Wrapper>
      <input type={type} aria-label={label} placeholder={label} />
    </Wrapper>
  )
}

export default FormField
