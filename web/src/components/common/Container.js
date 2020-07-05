import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  font-family: 'Montserrat';

  ${props => props.flex && `
    display: flex;
    justify-content: inherit;
    align-items: inherit;
    flex: 1;
  `}

  ${props => props.fullHeight && `
    height: 100%;
  `}
`

export const WavyContainer = styled(Container)`
  background: ${({ theme }) => theme.wavyContainer};
  clip-path: url(#wave);
`
