import React from 'react'
import { Text } from '../Text'
import { Container, Box, TextValue, Icon} from './styles'

export default function CardOverview({title,img , value, ...rest}) {
  return (
    <Container {...rest}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', backgroundColor:'#FFF', padding:'16px 0px', borderTopLeftRadius:4, borderBottomLeftRadius:4}}>
      <Icon src={img} />
      </div>
         
        <Box>
            <Text>{title}</Text>
            <TextValue>{value}</TextValue>
        </Box>
    </Container>
  )
}
