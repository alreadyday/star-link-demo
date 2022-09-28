import { memo } from "react";
import styled from "styled-components";
import BetContainer from "./BetContainer";
import BetUnitContainer from "./BetUnitContainer";

const Container = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  justify-content: space-between;
  height: -webkit-fill-available;
`;

export function DeskContainer() {
  return (
    <Container>
      <BetContainer />
      <BetUnitContainer />
    </Container>
  );
}

export default memo(DeskContainer);
