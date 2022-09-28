import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useMousePositionStore } from "../store";

const MouseCircle = styled.div`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 2px solid black;
  display: none;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 0;
`;

export default function MouseFocusCircleContainer() {
  const ref = useRef<HTMLDivElement>(null);
  const store = useMousePositionStore();

  useEffect(() => {
    if (ref.current) {
      if (store.isShowed) {
        ref.current.style.display = "initial";
        ref.current.style.transform = `translate(${
          store.x - window.pageXOffset - 25
        }px, ${store.y - -window.pageYOffset - 25}px)`;
      } else {
        ref.current.style.display = "";
      }
    }
  }, [store, ref]);

  return <MouseCircle ref={ref}></MouseCircle>;
}
