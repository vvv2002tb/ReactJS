import logo from './logo.svg';
import './App.css';
import {Card} from './components/Card'
import Thongsoaica from './components/Header'
import HomePage from './containers/HomePage';
import './layout/tailwind.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card/>
        <Thongsoaica/>
        <HomePage/>
        
      </header>
    </div>
  );
}

export default App;
