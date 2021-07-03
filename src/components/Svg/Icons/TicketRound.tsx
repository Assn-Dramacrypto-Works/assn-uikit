import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 480 470" {...props}>
      <image width="480" height="470" href="/images/bullet.png" />
    </Svg>
  );
};

export default Icon;
