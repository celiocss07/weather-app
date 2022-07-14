import React from 'react'
import CardOverview from '../CardOverview'
import LocationCard from '../LocationCard'
import Title from '../Title'
import { Container, Row } from './styles'

export default function MainBody() {
  return (
    <Container>
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
            <LocationCard value='London' />
            <LocationCard value='New York' />
            <LocationCard value='Santa Catarina' />
            <LocationCard value='Cape Town' />
            <LocationCard value='Cabinda' />
            <LocationCard value='Libreville' />
        </Row>
    </Container>
  )
}
