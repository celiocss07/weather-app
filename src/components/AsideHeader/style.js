import styled from "styled-components";

export const Container = styled.header`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0px;

  @media (min-width: 820px) {
    flex-direction: row;
    align-items: streetch;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  gap: 4px;
`;


