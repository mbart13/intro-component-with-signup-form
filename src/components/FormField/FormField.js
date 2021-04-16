import React from 'react'

import { InputWrapper, StyledInput } from './FormField.styles'

const FormField = React.forwardRef((props, ref) => {
  const isError = () => (props['errors'] ? 'isError' : '')

  return (
    <InputWrapper className={isError()}>
      <StyledInput {...props} ref={ref} className={isError()} />
      {props['errors'] && (
        <>
          <p className="errorMessage">{props['errors']['message']}</p>
        </>
      )}
    </InputWrapper>
  )
})

export default FormField
