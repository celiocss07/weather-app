import styled from "styled-components";

export const Container = styled.aside`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: red;

    @media(min-width: 640px){
        width: 35%;
    }

`;
