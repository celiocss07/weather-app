import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F2F2F2;
  padding: 8px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  gap: 4px;
`;

export const Input = styled.input.attrs({
    type: 'search'
})`
    padding: 1px 2px 1px 10px;
    color: #ADACB1;
    border: none;
    background: transparent;
    font-size: 16px;
   
    
`;
