import React from 'react'
import { WiSunrise } from 'react-icons/wi'
import AsideHeader from '../AsideHeader'
import { Box, Container as Card } from '../AsideHeader/style'
import CardOverview from '../CardOverview'
import { StrongText, Title } from '../Text'
import { Container, CardView, CardDetails } from './styles'

export default function Aside() {
  return (
    <Container>
        <AsideHeader />
        <Card style={{borderBottom: '1px solid #F2F2F2'}}>
          <Box>
            <WiSunrise size={24} color='#FFF' />
            <StrongText style={{fontSize: 28}}>20 ˚C</StrongText>
          </Box>
          <Title>Dramatic cloud</Title>
        </Card>
        <CardView>
          <CardDetails />
          <CardDetails />
        </CardView>
    </Container>
  )
}
