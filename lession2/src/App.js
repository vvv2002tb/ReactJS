import logo from './logo.svg';
import './App.css';
import {Card} from './components/Card'
import Thongsoaica from './components/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Thongsoaica/>
        <Card/>
        
      </header>
    </div>
  );
}

export default App;
