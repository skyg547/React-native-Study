import React from 'react';
import styled from 'styled-components';

const Title = styled.Text`
    font-size: 36px;

`;
const Button = styled.Button`


`;


function Componet(props){

    return(
        <>
            <Title>목록</Title>

            <Button title="조회" onPress={()=> {
            props.navigation.navigate('View');
            }}/>            
            <Button title="신규 작성" onPress={()=> {
            props.navigation.navigate('Form');
            }}/>

        </>

    )

}

export default Componet;