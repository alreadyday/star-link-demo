import React, { MouseEvent, useCallback } from "react";
import styled from "styled-components";
import DeskContainer from "./DeskConainer";
import MouseFocusCircleContainer from "./MouseFocusCircleContainer";
import { useMousePositionStore } from "./store";

const Container = styled.div`
  width: 500px;
  height: 600px;
  background: cornflowerblue;
`;

function App() {
  const mouseStore = useMousePositionStore();

  const mouseClickDownEvent = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      mouseStore.updateState({
        x: event.clientX,
        y: event.clientY,
        isShowed: true,
      });
    },
    [mouseStore]
  );
  const mouseClickUpEvent = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      mouseStore.updateState({
        x: event.clientX,
        y: event.clientY,
        isShowed: false,
      });
    },
    [mouseStore]
  );
  const mouseMoveEvent = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (mouseStore.isShowed) {
        mouseStore.updateState({
          x: event.clientX,
          y: event.clientY,
          isShowed: true,
        });
      }
    },
    [mouseStore]
  );
  return (
    <Container
      onMouseDown={mouseClickDownEvent}
      onMouseUp={mouseClickUpEvent}
      onMouseMove={mouseMoveEvent}
    >
      <DeskContainer />
      <MouseFocusCircleContainer />
    </Container>
  );
}

export default App;
