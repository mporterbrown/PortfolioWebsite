import React from 'react';
import styled from 'styled-components';
import headshotPath from '../../../src/headshot.jpeg'

const Container = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 35rem;
    background-color: rgba(0,0,0,0.5);
    max-height: 65vh;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow-y: auto;

    /* width */
    ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: transparent;
    box-shadow: inset 0 0 5px #dddddd;
    border-radius: 4px;
    border-left: 1.5px solid transparent;
    border-right: 1.5px solid transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: rgba(0,0,255,0.5);
    border-radius: 4px;
    }   
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
    filter: grayscale(100%);
`;
export default function AboutMe() {
    return (
        <Container>
            <Content>
                <Image src={headshotPath} alt="Headshot"/>
                <Paragraph>
                    I am a recent CS graduate from Bard College. I transferred to Bard in 2019 after sparking an interest in programming. I was previously attending CCNY's Sonic Arts program, where I learned a lot about music production and technology. I am excited to learn more about programming in the context of releasing production grade applications.  
                </Paragraph>
                
                <Paragraph>
                    For the past year or so, while finishing up my degree at Bard, I completed a full stack development course on Codecademy. I have a great interest in both front end and back end technologies and the process of building intuitive and responsive applications. For my senior thesis, I optimized a MongoDB database using Postgres as a cache. This was my first introduction to databases.  
                </Paragraph>

                <Paragraph>
                    Besides my continued studies and interest in programming, I make music and have a growing interest in 3D modeling and digital art.
                </Paragraph>
            </Content>
        </Container>

    )
}