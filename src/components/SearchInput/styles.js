import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(255,255,255,0.1);
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
    color: gray;
    border: none;
    background: transparent;
    min-width: 160px;
   
    
`;
