import React from 'react'
import { Text } from './styles'

export default function Title({children, ...rest}) {
  return (
    <Text {...rest}>
        {children}
    </Text>
  )
}
