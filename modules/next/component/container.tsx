import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  max-width: 1152px;
  margin: auto;
  padding: 0 1rem;
`

export default function Container({ children }) {
  return <Wrapper>{children}</Wrapper>
}
