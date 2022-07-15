import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/AppContext'
import CardOverview from '../CardOverview'
import LocationCard from '../LocationCard'
import { Title } from '../Text'
import windIcon from './../../assets/icons/wind.gif'
import windDegIcon from './../../assets/icons/signposts.gif'
import cloudsIcon from './../../assets/icons/clouds.gif'
import minIcon from './../../assets/icons/cold.gif'
import maxIcon from './../../assets/icons/hot.gif'
import humidityIcon from './../../assets/icons/humidity.png'
import { Container, Row } from './styles'

export default function MainBody() {

  const {data, favoritiesLocations, handleSearchFavorityLocation} = useContext(AppContext);
  useEffect(() =>{
    console.log(data?.wind)
  },[data])
  return (
    <Container >
      
      
        <Title>Today overview</Title>
        <Row>
            <CardOverview img={windIcon} title='Velocidade do vento' value={`${data?.wind?.speed} m/s`} />
            <CardOverview img={minIcon} title='Temp. mínima' value={data?.temp_min} />
            <CardOverview img={maxIcon} title='Temp. máxima' value={data?.temp_max} />
            <CardOverview img={humidityIcon} title='Humidade' value={data?.humidity} />
            <CardOverview img={cloudsIcon} title='Nuvens' value={data?.clouds} />
            <CardOverview img={windDegIcon} title='Direção do vento' value={`${data?.wind?.deg}˚`} />
            
        </Row>
        <Title>Favorite locations</Title>
        <Row>
          {
            favoritiesLocations.map( (res, index) => <LocationCard key={index} value={res} onClick={()=> handleSearchFavorityLocation(res)} />)
          }
            
            
            
        </Row>
    </Container>
  )
}
