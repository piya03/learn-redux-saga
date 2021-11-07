import logo from "./logo.svg";
import "./App.css";
import { CounterTest } from "./app/CounterTest";
import { Todo } from "./app/Todo";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world</h1>
        <CounterTest />
        <hr />
        <Todo />
      </header>
    </div>
  );
}

export default App;
