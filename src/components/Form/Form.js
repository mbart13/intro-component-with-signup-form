import React from 'react'

import FormField from 'components/FormField/FormField'
import styled from 'styled-components'
import Button from 'components/Button/Button'

const Wrapper = styled.section`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    flex: 1 0 50%;
  }
`
const CTAWrapper = styled.div`
  text-align: center;

  p {
    background-color: ${({ theme }) => theme.colors.blue};
    padding: 1.375rem 4rem;
    border-radius: 0.625rem;
    box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
    font-size: 0.9375rem;
    line-height: 1.7;
    margin-bottom: 1.4rem;
  }
`

const FormWrapper = styled.form`
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

    a {
      color: ${({ theme }) => theme.colors.red};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      text-decoration: none;
    }
  }
`

const Form = () => {
  return (
    <Wrapper>
      <CTAWrapper>
        <p>Try it free 7 days then $20/mo. thereafter</p>
      </CTAWrapper>
      <FormWrapper>
        <FormField type="text" label="First Name" />
        <FormField type="text" label="Last Name" />
        <FormField type="email" label="Email Address" />
        <FormField type="password" label="Password" />
        <Button>Claim your free trial</Button>
        <p>
          By clicking the button, you are agreeing to our{' '}
          <a href="/">Terms and Services</a>
        </p>
      </FormWrapper>
    </Wrapper>
  )
}

export default Form
