import React, { useContext } from 'react'
import { Container } from './styles'
import {HiX} from 'react-icons/hi'
import { AppContext } from '../../contexts/AppContext'

export default function LocationCard({value, ...rest}) {

  const {removeLocation} = useContext(AppContext);
  return (
    <Container {...rest}>
      {value}
       <HiX fontSize={16} color='red' style={{marginLeft: '8px'}} onClick={()=> removeLocation(value)} />
       
    </Container>
  )
}
