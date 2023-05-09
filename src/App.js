import { Head } from "./components/Head/Head";
import { MainContainer } from "./App.styled";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <MainContainer>
      <Head />
      <Sidebar />
    </MainContainer>
  );
}

export default App;
