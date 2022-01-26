import React from 'react';
import pdf from '../../Documents/Porter-Brown_Resume.pdf'
import styled from 'styled-components'
export default function Resume() {
    const Link = styled.a`
        text-decoration: none;
        &:hover {
            color: yellow;
            font-size: 1.7rem;
        }
    `;

    return <>
        <h2><Link href={pdf} target="_blank" rel="noreferrer">View</Link></h2>
        <h2><Link href={pdf} download >Download</Link></h2>
    </>
}