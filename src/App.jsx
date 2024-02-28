import "./index.css";
import { Counter } from "./Counter";

function App() {
  return <div className="container">{<Counter maxRange={10} />}</div>;
}

export default App;
