import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  padding: 24px 0px;
  background-color: #f2f2f2;
  display: flex;
  gap: 16px;
  align-items: center;
  border-radius: 4px;

  @media(min-width: 400px){
    width: 300px;
  }

  @media(min-width: 640px){
    width: 45%;
  }
  @media(min-width: 1200px){
    width: 30%;
  }
`;

export const Icon = styled.img.attrs({
  alt: "weather event",
})`
  width: 24px;
  height: 24px;
  margin-left: 16px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  
`;

export const Title = styled.h3`
  color: #adacb1;
  font-size: 12px;
  font-weight: normal;
`;

export const TextValue = styled.h3`
    font-size: 16px;
`;
