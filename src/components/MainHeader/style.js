import styled from "styled-components";

export const Container = styled.header`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0px;
  gap: 4px;
  border-bottom: 2px solid  rgba(255,255,255,0.1);
 

  @media (min-width: 820px) {
    flex-direction: row;
    align-items: streetch;
  }
`;

export const DateBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  gap: 4px;
  margin: 8px  16px;
`;


export const SearchBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: streetch;
  flex-wrap: wrap;
  
  gap: 4px;
  margin: 8px  16px;
`;
