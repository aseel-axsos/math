import logo from './logo.svg';
import './App.css';
import Sum from './components/Sum';
import Mult from './components/Mult'

function App() {
  return (
    <div className="App">
      <Sum/>
      <hr></hr>
      <Mult/>
    </div>
  );
}

export default App;
