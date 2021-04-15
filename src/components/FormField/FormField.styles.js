import styled from 'styled-components'
import { rgba } from 'polished'
import iconError from 'assets/images/icon-error.svg'

export const InputWrapper = styled.div`
  margin-bottom: 1rem;
  position: relative;

  &.isError::after {
    content: '';
    position: absolute;
    background-image: url(${iconError});
    background-size: cover;
    height: 27px;
    width: 27px;
    top: 0;
    transform: translateY(50%);
    right: 2rem;
  }
`
export const StyledInput = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.darkBlue};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 1rem;
  border-radius: 5px;

  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }

  ::placeholder {
    font-size: 0.875rem;
    color: ${({ theme }) => rgba(theme.colors.darkBlue, 0.75)};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }

  &.isError {
    border: 2px solid ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.red};
  }

  + .errorMessage {
    margin-top: 0.2rem;
    padding: 0;
    color: ${({ theme }) => theme.colors.red};
    font-size: 0.6875rem;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-style: italic;
    text-align: right;
  }
`
