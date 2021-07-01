import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 94 94" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={94}
        height={94}
        fill="none"
        viewBox="0 0 94 94"
        {...props}
      >
        <path
          stroke="#24c7d6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M92 47C92 22.147 71.853 2 47 2S2 22.147 2 47s20.147 45 45 45"
        />
      </svg>
    </Svg>
  );
};

export default Icon;
