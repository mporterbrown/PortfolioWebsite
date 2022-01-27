import React from 'react';
import styled from 'styled-components';
import headshotPath from '../../../src/headshot.jpeg'

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 35rem;
    background-color: rgba(0,0,0,0.5);
`;

const Paragraph = styled.p`
    font-size: 1rem;
    font-weight: bold;
    max-width: 35rem;
`;

const Image = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    margin-left: 13rem;
    margin-bottom: 1rem;
`;
export default function AboutMe() {
    return (
    <TextDiv>
        <Image src={headshotPath} alt="Headshot"/>
        <Paragraph>
            I am a recent CS graduate from Bard College. I transferred to Bard in 2019 after sparking an interest in programming. I was previously attending CCNY's Sonic Arts program, where I learned a lot about music production and technology. I am very excited to learn more about programming in the context of releasing production grade applications.  
        </Paragraph>
        
        <Paragraph>
            For the past year or so, while finishing up my degree at Bard, I completed an extensive full stack development course on Codecademy. I have a great interest in both front end and back end technologies and the process of building useful and responsive applications. For my senior thesis, I optimized a MongoDB database using Postgres as a cache. This was my first introduction to databases.  
        </Paragraph>

        <Paragraph>
            Beyond my continued studies and interest in the programming realm, I have had a lifelong passion for music and continue to play and write music to this day. I also have a growing interest in 3D modeling, digital art, and interactive websites.
        </Paragraph>
    </TextDiv>
    )
}