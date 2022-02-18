import { useState } from "react";
import Item from "../Item";
import Container from "../Container";
import "./index.css";

const App = () => {
  const [isMounted, setIsMounted] = useState(false);

  const doMount = () => {
    setIsMounted((mounted) => !mounted);
  };

  return (
    <div className="App">
      <button onClick={doMount}>Mount</button>
      <Container>
        <Item isVisible={isMounted} />
      </Container>
    </div>
  );
};

export default App;
