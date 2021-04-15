// @ts-nocheck
import React from 'react'
import { useForm } from 'react-hook-form'

import FormField from 'components/FormField/FormField'
import { Wrapper, CTAWrapper, FormWrapper } from './Form.styles'
import Button from 'components/Button/Button'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    return
  }

  return (
    <Wrapper>
      <CTAWrapper>Try it free 7 days then $20/mo. thereafter</CTAWrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormField
          {...register('firstName', { required: 'First Name cannot be empty' })}
          type="text"
          placeholder="First Name"
          aria-label="First Name"
          autoComplete="off"
          errors={errors.firstName}
        />
        <FormField
          {...register('lastName', { required: 'Last Name cannot be empty' })}
          type="text"
          placeholder="Last Name"
          aria-label="Last Name"
          autoComplete="off"
          errors={errors.lastName}
        />
        <FormField
          {...register('email', {
            required: 'email cannot be empty',
            pattern: {
              value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
              message: 'Looks like this is not an email',
            },
          })}
          placeholder="Email Address"
          type="email"
          aria-label="Email Address"
          autoComplete="off"
          errors={errors.email}
        />
        <FormField
          {...register('password', { required: 'Password cannot be empty' })}
          placeholder="Password"
          type="password"
          aria-label="Password"
          autoComplete="off"
          errors={errors.password}
        />
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
