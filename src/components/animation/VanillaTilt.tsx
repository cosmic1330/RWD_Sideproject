import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface TiltOptions {
  scale?: number;
  speed?: number;
  max?: number;
}

interface VanillaTiltDivProps {
  options?: Partial<TiltOptions>;
  children?: React.ReactNode;
}

export default function VanillaTiltDiv(
  { options, children, ...rest }: VanillaTiltDivProps = {
    options: {
      scale: 1.2,
      speed: 1000,
      max: 30,
    },
  }
) {
  const tilt = useRef(null);

  useEffect(() => {
    if (tilt.current) {
      VanillaTilt.init(tilt.current, options);
    }
  }, [options]);
  return <div ref={tilt} {...rest}>{children}</div>;
}
