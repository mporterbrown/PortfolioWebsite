import React from 'react'
import styled from 'styled-components'
import headshotPath from '../../../src/headshot.jpeg'

const Container = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 35rem;
    background-color: rgba(0,0,0,0.5);
    max-height: 65vh;
`

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
`

const Paragraph = styled.p`
    font-size: 1rem;
    font-weight: bold;
    max-width: 35rem;
`

const Image = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    margin-left: 13rem;
    margin-bottom: 1rem;
    filter: grayscale(100%);
`

const star = '✪'
const starBanner = Array(33).fill(star).join(' ');

export default function AboutMe() {
    return (
        <Container>
            <Content>
                <Image src={headshotPath} alt="Headshot"/>
                <Paragraph>
                    {starBanner}
                </Paragraph>  
                <Paragraph>
                    I'm a Software Engineer from Miami, FL living in New York, NY.
                    I've been working at Quantcast since 2022.  
                </Paragraph>
                <Paragraph>
                    Besides my continued studies and interest in programming, I write and produce music and have a growing interest in 3D modeling and digital art.
                </Paragraph>
                <Paragraph>
                    {starBanner}
                </Paragraph>
            </Content>
        </Container>
    )
}