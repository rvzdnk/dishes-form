import React, {Suspense} from 'react';
import foodbg from './assets/foodbg.mp4';
import Form from "./components/Form/Form";
import { ToastContainer } from 'react-toastify';
import PageLoader from './components/PageLoader/PageLoader';
import { Video, Content, Container, Background } from './App.styled';
import "react-toastify/dist/ReactToastify.min.css";
import './App.styled'


const App:React.FC = () => {

  return (
    <Suspense fallback={<PageLoader/>}>
      <Container>
        <Video autoPlay loop muted>
          <Background src={foodbg} type='video/mp4' />
        </Video>
        <Content>
          <Form/>
        </Content>
      </Container>
      <ToastContainer />
    </Suspense>
    
  )
}

export default App
