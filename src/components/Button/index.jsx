import React from 'react'
import { Container } from './styles'


export default function Button({Icon, ...rest}) {
  return (
    <Container {...rest}>
        <Icon width={18} color='#ADACB1' />
    </Container>
  )
}
