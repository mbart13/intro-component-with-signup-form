import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.footer`
  align-self: center;
  text-align: center;
  padding-top: 1rem;
  font-size: 0.7rem;
`

const Footer = () => (
  <Wrapper>
    <p className="attribution">
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer noopener"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href="https://github.com/mbart13"
        target="_blank"
        rel="noreferrer noopener"
      >
        Michal
      </a>
      .
    </p>
  </Wrapper>
)

export default Footer
