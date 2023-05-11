import damiens from './damiens.png';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" width={500} />
        <img src={damiens} alt="logo" width={500}/>
      </header>
    </div>
  );
}

export default App;
