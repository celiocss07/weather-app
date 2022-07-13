import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 8px;
  display: flex;
  align-items: streetch;
  justify-content: space-between;
`;

export const DateBox = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  gap: 4px;
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
  padding: 8px;
  display: flex;
  justify-content: space-around;
  background-color: white;
  gap: 4px;
`;