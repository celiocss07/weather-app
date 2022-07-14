import React from 'react'
import { Text } from '../Text'
import { Container, Icon,Box, TextValue} from './styles'

export default function CardOverview() {
  return (
    <Container>
        <Icon src={require('./../../assets/icons/signposts.png')}  />
        <Box>
            <Text>wind speed</Text>
            <TextValue>250 km/h</TextValue>
        </Box>
    </Container>
  )
}
