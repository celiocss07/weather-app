import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 640px){
        width: 65%;
    }
`;
