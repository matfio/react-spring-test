import { useState } from "react";
import SpringContainer from "../SpringContainer";
import "./index.css";

const itemArray = [
  {
    y: 100,
    delay: 0,
    endX: 100,
    exitX: -100,
  },
  { y: 200, delay: 200, endX: 200, exitX: -100 },
  { y: 300, delay: 400, endX: 300, exitX: -100 },
  { y: 400, delay: 600, endX: 400, exitX: -100 },
  { y: 500, delay: 800, endX: 500, exitX: -100 },
  { y: 600, delay: 1000, endX: 600, exitX: -100 },
  { y: 700, delay: 1200, endX: 700, exitX: -100 },
];

const App = () => {
  const [items, setItems] = useState([]);

  const doMount = () => {
    setItems((items) => (items?.length ? [] : itemArray));
  };

  const btnText = items?.length ? "un-mount" : "mount";

  return (
    <div className="App">
      <button onClick={doMount}>{btnText}</button>
      <SpringContainer items={items} />
    </div>
  );
};

export default App;
