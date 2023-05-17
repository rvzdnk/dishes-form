
import './App.styled.js'
import Form from "./components/Form/Form";
import foodbg from "./assets/foodbg.mp4";
import { Video, Content, Container } from './App.styled.js';
import "react-toastify/dist/ReactToastify.min.css";


function App() {

  return (
    <Container>
      <Video autoPlay loop muted>
        <source src={foodbg} type='video/mp4' />
      </Video>
      <Content>
        <Form/>
      </Content>
    </Container>
  )
}

export default App
