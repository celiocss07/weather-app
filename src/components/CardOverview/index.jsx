import React from 'react'
import { Container, Icon,Box, TextValue, Title } from './styles'

export default function CardOverview() {
  return (
    <Container>
        <Icon src={require('./../../assets/icons/signposts.png')}  />
        <Box>
            <Title>wind speed</Title>
            <TextValue>250 km/h</TextValue>
        </Box>
    </Container>
  )
}
