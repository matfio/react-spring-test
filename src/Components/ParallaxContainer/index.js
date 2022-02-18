import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";

const ParallaxContainer = ({ children }) => {
  const addChild = (child) => {
    console.log(child.props.children);
    return (
      <ParallaxLayer offset={0} speed={Math.random() * 5}>
        {child}
      </ParallaxLayer>
    );
  };

  return (
    <Parallax pages={2}>{React.Children.map(children, addChild)}</Parallax>
  );
};

export default ParallaxContainer;
