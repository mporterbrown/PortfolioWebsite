import React from 'react';
import styled from 'styled-components'

export default function Projects() {

    const PageContent = styled.div`
        display: flex;
        position: absolute;
        width: 90vw;
        max-height: 55vh;
        top: 30vh;
        padding-top: 1rem;
        justify-content: space-between;
        
    `;

    const LeftContent = styled.div`
        border-style: dotted double red;
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
        background: rgba(255,0,0,0.5);
        border-radius: 4px;
        }
        
    `;

    const RightContent = styled.div`
        display: flex;
        flex-direction: column;
        max-height: 100%;
        float: right;
        padding-right: 0rem;
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
        background: rgba(255,0,0,0.5);
        border-radius: 4px;
        }
    `;

    const Paragraph = styled.p`
        margin-top: 0;
        max-width: 32rem;
    `;

    const LinkedHeader = styled.a`
        font-weight: bold;
        font-size: 1.7rem;
        color: green;
        text-decoration: none;
        padding-bottom: 1rem;
        &:hover {
            text-decoration: underline dotted green;
        }
    `;

    const Subheading = styled.h3`
        font-size: 1.2rem;
        font-style: italic;
    `;

    return (
        <PageContent>
            <LeftContent>
                <LinkedHeader href="https://github.com/mporterbrown/PotsgresAsACacheWithMongoDB" target="_blank" rel="noreferrer">Using Postgres as a Cache with MongoDB</LinkedHeader>
                <Subheading>Undergraduate Senior Thesis</Subheading>
                <Paragraph>
                    <ul>
                        <li>Explored caching mongoDB queries and statistics in Postgres</li>
                        <li>Implemented a feature that automatically detects if a new mongoDB query can be satisfied by carrying out Joins, Subsets, or Unions of already cached data</li>
                        <li> Avoids the need to make unnecessary queries to MongoDB servers and successfully increased efficiency of queries</li>
                    </ul>
                </Paragraph>
                <LinkedHeader href="https://github.com/mporterbrown/BerzerkRemake" target="_blank" rel="noreferrer">Berzerk Remake</LinkedHeader>
                <Subheading>Remake of Atari 2600 Version of “Berzerk” the game</Subheading>
                <Paragraph>
                    <ul>
                        <li>Studied source code to understand how the game functions</li>
                        <li>Created a remake of Berzerk using the TIC80 platform and the Lua programming language</li>
                    </ul>
                </Paragraph>
                <LinkedHeader href="https://github.com/mporterbrown/PortfolioWebsite" target="_blank" rel="noreferrer">Portfolio Website</LinkedHeader>
                <Subheading>Solo Project</Subheading>
                <Paragraph>
                    <ul>
                        <li>Built using React, Three.js, and Other Libraries</li>
                        <li>Model created with Blender</li>
                    </ul>
                </Paragraph>
            </LeftContent>

            <RightContent>
                <LinkedHeader href="https://github.com/mporterbrown/Scheme-Interpreter-In-Swift" target="_blank" rel="noreferrer">Scheme Interpreter</LinkedHeader>
                <Subheading>Scheme interpreter using Swift</Subheading>
                <Paragraph>
                    <ul>
                        <li>Successfully interprets the main Scheme functions including Closure functionality</li>
                        <li>Implemented the Visitor Pattern</li>
                    </ul>
                </Paragraph>
                <LinkedHeader href="https://github.com/mporterbrown/PianoGUI" target="_blank" rel="noreferrer">Guitar Emulator</LinkedHeader>
                <Subheading>Synthesized Guitar Sample with Piano GUI</Subheading>
                <Paragraph>
                    <ul>
                        <li>Guitar sample generated using a ring buffer data structure</li>
                        <li>Piano GUI supports octave functionality</li>
                        <li>GUI built using JFrame</li>
                    </ul>
                </Paragraph>
                <LinkedHeader href="https://github.com/mporterbrown/ConvexHull" target="_blank" rel="noreferrer">Convex Hull</LinkedHeader>
                <Subheading>Provides Graphic of Convex Hull</Subheading>
                <Paragraph>
                    <ul>
                        <li>Implemented Bag, Priority Queue, and Stack</li>
                        <li>Program generates random points and draws resulting convex hull</li>
                    </ul>
                </Paragraph>
            </RightContent>
        </PageContent>
    )
}