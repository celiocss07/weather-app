import React, { useContext } from 'react'
import { WiSunrise, WiSunset } from 'react-icons/wi'
import { AppContext } from '../../contexts/AppContext'
import { convertTime } from '../../services'
import AsideHeader from '../AsideHeader'
import { Box, Container as Card } from '../AsideHeader/style'
import { StrongText, Title } from '../Text'
import { Container, CardView, CardDetails } from './styles'
import sunriseIcon from './../../assets/icons/cloudy.gif'
import sunsetIcon from './../../assets/icons/sunrise.gif'
export default function Aside() {
  const {data} = useContext(AppContext);
  return (
    <Container>
        <AsideHeader />
        <Card style={{borderBottom: '1px solid #F2F2F2'}}>
          <Box style={{alignItems:'center'}}>
            
            {data?.weather  && (<img src={`http://openweathermap.org/img/wn/${data?.weather?.icon}@2x.png`}  alt={`${data?.weather?.description}`}/>)}
            <StrongText style={{fontSize: 28}}>{data?.temp}</StrongText>
          </Box>
          {data?.weather && (<Title>{data?.weather?.description}</Title>)}
        </Card>
        <CardView>
          <CardDetails img={sunriseIcon} title='Nascer do sol' value={data?.sunrise} />
          <CardDetails img={sunsetIcon} title='Por do sol' value={data?.sunset} />
        </CardView>
    </Container>
  )
}
