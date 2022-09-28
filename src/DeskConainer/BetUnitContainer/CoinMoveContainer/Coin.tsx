import { memo, useEffect, useRef } from "react";
import styled from "styled-components";

const Chip = styled.div`
  border-radius: 50%;
  border: 1px solid white;
  background: red;
  width: 50px;
  height 50px;
  color: white;
  line-height: 42px;
  text-align: center;
  transition: 0.5s;
  position: absolute;
  pointer-events: none;
`;

export function Coin({ x, y }: { x: number; y: number }) {
  let ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const currentPosition = ref.current.getBoundingClientRect();
      // reset position to (0,0) and add position of bet block
      ref.current.style.transform = `translate(${
        -currentPosition.left + x - 25
      }px, ${-currentPosition.top + y - 25}px)`;
    }
  }, [ref, x, y]);

  return <Chip ref={ref}>chip</Chip>;
}

export default memo(Coin);
