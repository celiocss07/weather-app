import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  
`;

export const Row = styled.div`
  width: 100%;
  margin: 16px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  @media(min-width: 640px){
    justify-content: space-between;
  }
  
`;
