import Header from "./components/navigation/Header";
import Services from "./components/services/Services";
import { Container } from "./components/UI/Container";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Services />
      </Container>
    </>
  );
}

export default App;
