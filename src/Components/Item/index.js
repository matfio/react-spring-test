import { useTransition, animated } from "react-spring";
import "./index.css";

const from = {
  x: -100,
  y: 800,
  opacity: 0,
};

const enter = {
  x: 0,
  y: 0,
  opacity: 1,
};

const leave = {
  x: 100,
  y: 800,
  opacity: 0,
};

const Item = ({ isVisible }) => {
  const transition = useTransition(isVisible, {
    from,
    enter,
    leave,
  });

  return transition(
    (style, item) =>
      item && <animated.div className="item" style={style}></animated.div>
  );
};

export default Item;
