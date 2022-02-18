import { useTransition } from "react-spring";
import AnimatedItem from "../AnimatedItem";
import "./index.css";

const from = {
  width: 10,
  height: 10,
  x: -100,
  y: 800,
  opacity: 0,
};

const enter = (item) => async (next) => {
  await next({
    y: item.y,
    opacity: 1,
    delay: item.delay,
  });

  await next({
    width: 100,
    height: 100,
    x: 0,
  });
};

const leave = (item) => (next) =>
  next({
    x: item.exitX,
    y: item.y,
    opacity: 0,
    delay: item.delay,
  });

const SpringContainer = ({ items }) => {
  const transition = useTransition(items, {
    from,
    enter,
    leave,
  });

  return (
    <div className="spring-container">
      {transition((style, item) => item && <AnimatedItem style={style} />)}
    </div>
  );
};

export default SpringContainer;
