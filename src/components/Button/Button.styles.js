import styled from 'styled-components'
import { lighten } from 'polished'

export const StyledButton = styled.button`
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

  :hover,
  :focus {
    background-color: ${({ theme }) => lighten(0.1, theme.colors.green)};
  }

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`
