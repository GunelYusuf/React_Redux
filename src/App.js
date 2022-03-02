import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import IncreaseCounter from "./components/IncreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import DecreaseCounter from "./components/DecreaseCounter";

function App() {
  return (
    <div className="App">
      <Counter/>
      <IncreaseCounter/>
      <IncreaseByTwoCounter/>
      <DecreaseCounter/>
    </div>
  );
}

export default App;
