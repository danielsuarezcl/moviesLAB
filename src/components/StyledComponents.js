import React from "react"
import styled from 'styled-components'

export default function MyStyle404(){
    const MyH1 = styled.h1`
        text-align: center;
    `;
    const MyH3 = styled.h3`
        padding: 2rem; 
        text-align: center;
        color: white;
        background: red;
    `;
    return(
        <>
            <MyH1>404: Página no encontrada</MyH1>
            <MyH3>No pudimos encontrar nada aquí :(</MyH3>
        </>
    )
}