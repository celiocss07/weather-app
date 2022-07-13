import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  @media(min-width: 640px){
    flex-direction: row;
    
    align-items: streetch;
    
  }
`;

export const DateBox = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  gap: 4px;
  margin: 8px;
`;

export const ShortDateText = styled.h2`
  font-size: 16px;
`;
export const LongDateText = styled.h2`
  color: #ADACB1;
  font-size: 12px;
  font-weight: normal;
`;

export const SearchBox = styled.div`
  
  display: flex;
  justify-content: space-around;
  align-items: streetch;
  background-color: white;
  gap: 4px;
  margin: 8px;
`;