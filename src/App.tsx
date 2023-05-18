import React from 'react';
import './App.styled'
import Form from "./components/Form/Form";
import { ToastContainer } from 'react-toastify';
import foodbg from './assets/foodbg.mp4';
import { Video, Content, Container, Background } from './App.styled';
import "react-toastify/dist/ReactToastify.min.css";


const App:React.FC = () => {

  return (
    <Container>
      <Video autoPlay loop muted>
        <Background src={foodbg} type='video/mp4' />
      </Video>
      <Content>
        <Form/>
      </Content>
      <ToastContainer />
    </Container>
  )
}

export default App
