import styled from 'styled-components'

export const Wrapper = styled.main`
  max-width: 31.25rem;
  flex-grow: 1;
  margin: 0 auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: flex;
    align-items: center;
    max-width: 68.75rem;
  }
`
