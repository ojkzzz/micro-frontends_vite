import { useState } from "react";
import "./App.css";
import Button from "remoteApp/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <Button onClick={() => setCount((prev) => prev + 1)} />
    </div>
  );
}

export default App;
