import './App.css';
import { Container, Footer, Header, Main } from './components';

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <div>
          <div>Main conteudo</div>
          <div>Main conteudo</div>
          <div>Main conteudo</div>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
