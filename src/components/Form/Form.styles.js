import styled from 'styled-components'

export const Wrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    flex: 1 0 50%;
  }
`
export const CTAWrapper = styled.p`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 1.375rem 4rem;
  border-radius: 0.625rem;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
  font-size: 0.9375rem;
  line-height: 1.7;
  margin-bottom: 1.4rem;
`

export const FormWrapper = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 8px rgba(0, 0, 0, 0.15);

  p {
    color: ${({ theme }) => theme.colors.grayishBlue};
    font-size: 0.6875rem;
    margin-top: 0.8rem;
    text-align: center;
    padding: 0 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.red};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-decoration: none;
  }
`
