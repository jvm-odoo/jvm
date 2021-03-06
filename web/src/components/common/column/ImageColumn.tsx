import React from 'react'
import styled from 'styled-components'

import { Column } from './'
import Particles from 'react-particles-js'

const StyledImageColumn = styled(Column)`
    display: none;
    box-sizing: border-box;
    padding: 48px 24px;
    overflow: hidden;
    border-radius: 5px;
    min-height: 60vh;

    @media only screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Image = styled.img`
    flex: 1;
    border-radius: 5px;
    width: 100%;
`

interface IImageColumnProps {
    background?: string
}

export const ImageColumn = ({ background }: IImageColumnProps) => {
    return (
        <StyledImageColumn padding>
            <Image src={background} alt="Jason Van Malder - Computer" />
        </StyledImageColumn>
    )
}
