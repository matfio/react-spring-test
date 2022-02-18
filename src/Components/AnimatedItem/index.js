import { animated } from "react-spring";
import "./index.css";

const AnimatedItem = ({ style }) => {
  return <animated.div className="item" style={style}></animated.div>;
};

export default AnimatedItem;
