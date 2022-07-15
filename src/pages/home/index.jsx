import React, { useContext } from 'react';
import Aside from '../../components/Aside';
import Main from '../../components/Main';
import Modal from '../../components/Modal';
import { AppContext } from '../../contexts/AppContext';
import { Container } from './styles';

function Home() {
  const {loading} = useContext(AppContext);
  return (
  <Container>
    {loading && (<Modal />)}
    
    <Main />
    <Aside />
  </Container>
  );
}

export default Home;