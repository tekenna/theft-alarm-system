import './App.css';
import Nav from "./components/navbar/Nav"
import Header from './components/header/Header';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
    </div>
  );
}

export default App;
