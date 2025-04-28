import './App.css';
import { About } from './components/About';
import {Welcome} from './components/Welcome';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Welcome />
      <About />
      <Portfolio />
      <Skills />
    </div>
  );
}

export default App;
