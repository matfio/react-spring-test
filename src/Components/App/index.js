import { useState } from "react";
import SpringContainer from "../SpringContainer";
import "./index.css";

const itemArray = [
  {
    y: -80,
    delay: 0,
    exitX: -100,
  },
  { y: 0, delay: 200, exitX: -200 },
  { y: 80, delay: 400, exitX: -300 },
];

const App = () => {
  const [items, setItems] = useState([]);

  const doMount = () => {
    setItems((items) => (items?.length ? [] : itemArray));
  };

  return (
    <div className="App">
      <button onClick={doMount}>Mount</button>
      <SpringContainer items={items} />
    </div>
  );
};

export default App;
