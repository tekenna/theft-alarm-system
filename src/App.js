import './App.css';
import Nav from "./components/navbar/Nav"
import Header from './components/header/Header';
import About from './components/about/About';
import Dangers from './components/dangers/Dangers';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Dangers />
    </div>
  );
}

export default App;
