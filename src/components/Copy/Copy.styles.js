import styled from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;
  padding-top: 3rem;
  line-height: 1.2;
  margin-bottom: 4.125rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding-top: 0;
    margin-bottom: 0;
    flex: 1 0 50%;
    text-align: left;
    padding-right: 3rem;
  }

  h1 {
    font-size: 1.75rem;
    padding-bottom: 2.25rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
      font-size: 3.125rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: initial;
  }
`
