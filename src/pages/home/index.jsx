import React, { useContext } from 'react';
import Aside from '../../components/Aside';
import Main from '../../components/Main';
import Modal from '../../components/Modal';
import { AppContext } from '../../contexts/AppContext';
import { Container } from './styles';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Home() {
  const {loading} = useContext(AppContext);
  return (
  <Container>
    {loading && (<Modal />)}
    <ToastContainer />
    
    <Main />
    <Aside />
  </Container>
  );
}

export default Home;