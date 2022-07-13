import React from 'react'
import { Container, Input } from './styles'
import {SearchIcon} from '@heroicons/react/outline'
export default function SearchInput({placeholder, ...rest}) {
  return (
    <Container>
        <SearchIcon color='#ADACB1' width={18} />
        <Input placeholder={placeholder} {...rest} />
    </Container>
  )
}
