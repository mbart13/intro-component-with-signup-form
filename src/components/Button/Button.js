import React from 'react'

import styled from 'styled-components'
import { lighten } from 'polished'

const ButtonWrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border: none;
  border-radius: 5px;
  width: 100%;
  font-size: 0.9375rem;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-transform: uppercase;
  box-shadow: inset 0 -4px rgba(0, 0, 0, 0.1);

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => lighten(0.1, theme.colors.green)};
  }

  :focus {
    outline: none;
  }
`

const Button = ({ children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>
}

export default Button
