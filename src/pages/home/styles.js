import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);

  @media(min-width: 640px){
    flex-direction: row;
    justify-content: space-between;
    
  }
  
`;
