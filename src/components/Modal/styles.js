import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  
`;
export const Body = styled.div`
  width: 90%;
  padding: 8px;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: 640px){
    width: 360px;
    
  }
  border-radius: 4px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  
`;
export const RowBody = styled.div`
  width: 100%;
  display: flex;
  margin: 24px 0px;
  align-items: center;
  justify-content: center;
`;



