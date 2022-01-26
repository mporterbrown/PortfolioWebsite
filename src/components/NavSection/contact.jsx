import React from 'react';
import styled from 'styled-components';

export default function Contact() {

    const Link = styled.a`
        text-decoration: none;
        &:hover {
            color: purple;
            font-size: 1.7rem;
        }
    `

    return <>
        <h2><Link href="mailto:mporterbrown@gmail.com" target="_blank" rel="noreferrer">mporterbrown@gmail.com</Link></h2>
        <h2><Link href="https://www.linkedin.com/in/mason-porter-brown-9ba097b2" target="_blank" rel="noreferrer">Linkedin</Link></h2>
        <h2><Link href="https://github.com/mporterbrown" target="_blank" rel="noreferrer">Github</Link></h2>
        </>
}