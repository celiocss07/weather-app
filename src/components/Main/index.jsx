import React from 'react'
import MainBody from '../MainBody'
import MainHeader from '../MainHeader'
import { Container } from './styles'

export default function Main() {
  return (
    <Container>
        <MainHeader />
        <MainBody />
    </Container>
  )
}
