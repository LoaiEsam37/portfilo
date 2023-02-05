import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Skills from './components/Skills.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Skills />
    </div>
  );
}

export default App;
