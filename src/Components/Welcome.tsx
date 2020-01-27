import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    width: 100%;
    padding-top: 26px;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    background-color: #2dabf9
`;

const Heading = styled.h1`
    font-size: 26px;
    width: 100%;
    font-weight: bold;
    color: white;
    font-family: georgia;
`;

const Paragraph = styled.p`
    font-size: 14px;
    width: 100%;
    margin-top: 0;
    color: white;
    font-family: georgia;
`;

const Welcome = () => {
    return (
    <Container>
        <Heading>
            Hello there!
        </Heading>
        <Paragraph>
            Type in a search term and hit "Go!" to see some memes!
        </Paragraph>
    </Container>
    )
};

export default Welcome;