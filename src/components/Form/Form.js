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
      <CTAWrapper>
        <span>Try it free 7 days</span> then $20/mo. thereafter
      </CTAWrapper>
      <FormWrapper
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        autoComplete="off"
      >
        <FormField
          {...register('firstName', { required: 'First Name cannot be empty' })}
          type="text"
          placeholder="First Name"
          aria-label="First Name"
          aria-invalid={errors.firstName ? 'true' : 'false'}
          errors={errors.firstName}
        />
        <FormField
          {...register('lastName', { required: 'Last Name cannot be empty' })}
          type="text"
          placeholder="Last Name"
          aria-label="Last Name"
          aria-invalid={errors.lastName ? 'true' : 'false'}
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
          aria-invalid={errors.email ? 'true' : 'false'}
          errors={errors.email}
        />
        <FormField
          {...register('password', {
            required: 'Password cannot be empty',
            minLength: {
              value: 6,
              message: 'Password needs to have at least 6 characters',
            },
            maxLength: {
              value: 256,
              message: 'Password cannot have more thant 256 characters',
            },
          })}
          placeholder="Password"
          type="password"
          aria-label="Password"
          aria-invalid={errors.password ? 'true' : 'false'}
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
