// src/App.jsx
import CounterApp from "./components/CounterApp";
import NewsApiApp from "./components/NewsApiApp";
import StateExample from "./components/StateExample";

function App() {
  return (
    <div>
      <h1>React Hooks and State Examples</h1>
      <hr />
      <StateExample />
      <hr />
      <CounterApp />
      <hr />
      <NewsApiApp />
    </div>
  );
}

export default App;