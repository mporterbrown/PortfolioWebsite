import React from 'react';
import styled from 'styled-components'

const TopTextContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction = column;
`;

const Name = styled.h1`
    font-weight: 700;
    padding-top: 2rem;
    padding-left: 5rem;
`;

export function NavSection() {
    return <>
        <TopTextContainer>
            <Name>Mason</Name>
        </TopTextContainer>
    </>
}