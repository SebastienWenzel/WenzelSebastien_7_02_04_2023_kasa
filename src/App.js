import logo from './logo.svg';
import './App.css';
import Home from '@/pages/Home';
import Accomodation from '@/pages/Accomodation';
import About from '@/pages/About';
import Error from '@/pages/NotFoundPages';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home/>
        <Accomodation/>
        <About/>
        <Error/>
      </header>
    </div>
  );
}

export default App;
