import React from "react";
import { useSpring, animated } from "@react-spring/web";
const NumberMove = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 0,
    config: { mass: 1, tension: 170, friction: 26 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

export default NumberMove;
