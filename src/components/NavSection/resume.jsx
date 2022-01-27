import React from 'react';
import pdf from '../../Documents/Porter-Brown_Resume.pdf'
import styled from 'styled-components'

const Link = styled.a`
        text-decoration: none;
          &:hover {
            color: #ffee10;
            text-shadow: 0 0 5px #ffee10;
        }
`;
    
export default function Resume() {
    return <>
        <h2><Link href={pdf} target="_blank" rel="noreferrer">View</Link></h2>
        <h2><Link href={pdf} download >Download</Link></h2>
    </>
}