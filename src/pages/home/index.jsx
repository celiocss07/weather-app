import React from 'react';
import Aside from '../../components/Aside';
import Main from '../../components/Main';
import { Container } from './styles';

function Home() {
  return (
  <Container>
    <Main />
    <Aside />
  </Container>
  );
}

export default Home;