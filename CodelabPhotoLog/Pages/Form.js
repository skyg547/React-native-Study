import React from 'react';
import styled from 'styled-components';

const Title = styled.Text`
    font-size: 36px;

`;
const Image = styled.Image`

    width: 100%;
    height: 360px;
`;
const Button = styled.Button`
`;

const Input = styled.TextInput`
    width: 100px;
    font-size: 16px;
    padding: 4px;
    border: 1px solid #e5e5e5;
`;


function Componet(props){

    return(
        <>
            <Title>작성</Title>
        </>

    )

}

export default Componet;