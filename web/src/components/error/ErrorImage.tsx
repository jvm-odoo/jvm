import styled from 'styled-components'

export const ErrorImage = styled.img.attrs(() => ({
    loading: 'lazy',
    decoding: 'async',
}))`
    width: 300px;
    @media only screen and (min-width: 1024px) {
        width: 500px;
    }
    @media only screen and (min-width: 1440px) {
        width: 750px;
    }
`
