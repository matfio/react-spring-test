import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useTransition } from "react-spring";
import AnimatedItem from "../AnimatedItem";
import "./index.css";

const from = {
  width: 10,
  height: 10,
  x: 0,
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
    x: item.endX,
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
      <Parallax pages={2}>
        {transition(
          (style, item) =>
            item && (
              <ParallaxLayer speed={(Math.random() - 0.5) * 5}>
                <AnimatedItem style={style} />
              </ParallaxLayer>
            )
        )}
      </Parallax>
    </div>
  );
};

export default SpringContainer;
