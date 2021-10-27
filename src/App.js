import Benefits from "./benefits/Benefits";
import Header from "./components/navigation/Header";
import Services from "./components/services/Services";
import { Container } from "./components/UI/Container";
import Logos from "./mission/Logos";
import MissionCards from "./mission/MissionCards";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Services />
        <Benefits />
        <Logos />
        <MissionCards />
      </Container>
    </>
  );
}

export default App;
