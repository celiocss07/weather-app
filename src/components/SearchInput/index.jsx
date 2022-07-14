import React, { useContext } from 'react'
import { Container, Input } from './styles'
import {SearchIcon} from '@heroicons/react/outline'
import { AppContext } from '../../contexts/AppContext'


export default function SearchInput({placeholder, ...rest}) {

  const {inputValue, setInputValue} = useContext(AppContext);

  function handleSetInputValue(e){
    setInputValue(e.target.value);
    console.log(e.target.value)
  }
  return (
    <Container>
        <SearchIcon color='#ADACB1' width={18} />
        <Input 
          value={inputValue}
          placeholder={placeholder}
          onChange={handleSetInputValue}
          onKeyPress={(e)=> console.log(e.key)}
          {...rest} 
        />
    </Container>
  )
}
