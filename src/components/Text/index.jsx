import React from 'react';
import { TitleValue, TextValue, StrongTextValue } from './styles';

export  function Title({children, ...rest}) {
    return (
      <TitleValue {...rest}>
          {children}
      </TitleValue>
    )
}

export function Text({children, ...rest}){
    return (
        <TextValue {...rest}>
            {children}
        </TextValue>
      )
}

export function StrongText({children, ...rest}){
    return (
        <StrongTextValue {...rest}>
            {children}
        </StrongTextValue>
      )
}

