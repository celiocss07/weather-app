import React from 'react'
import CardOverview from '../CardOverview'
import LocationCard from '../LocationCard'
import { Title } from '../Text'

import { Container, Row } from './styles'

export default function MainBody() {
  return (
    <Container >
      
      
        <Title>Today overview</Title>
        <Row>
            <CardOverview />
            <CardOverview />
            <CardOverview />
            <CardOverview />
        </Row>
        <Title>Favorite locations</Title>
        <Row>
            <LocationCard value='Luanda' />
            <LocationCard value='Luanda' />
            <LocationCard value='Luanda' />
            <LocationCard value='Luanda' />
            <LocationCard value='Luanda' />
            <LocationCard value='Luanda' />
            
        </Row>
    </Container>
  )
}
