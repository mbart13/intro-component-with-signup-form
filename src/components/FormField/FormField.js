import React from 'react'

import { InputWrapper, StyledInput } from './FormField.styles'

const FormField = React.forwardRef((props, ref) => {
  console.log(props)
  return (
    <InputWrapper className={props['errors'] ? 'isError' : ''}>
      <StyledInput
        {...props}
        ref={ref}
        className={props['errors'] ? 'isError' : ''}
      />
      {props['errors'] && (
        <p className="errorMessage">{props['errors']['message']}</p>
      )}
    </InputWrapper>
  )
})

export default FormField
