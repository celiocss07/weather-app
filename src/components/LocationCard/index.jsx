import React from 'react'
import { Container } from './styles'

export default function LocationCard({value, ...rest}) {
  return (
    <Container {...rest}>
       {value}
    </Container>
  )
}
