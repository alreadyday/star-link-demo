import styled from "styled-components";
import { useCoinStore } from "../../../store";
import Coin from "./Coin";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 50px;
`;

export default function CoinMoveContainer() {
  const store = useCoinStore();

  return (
    <Container>
      {store.coinList.map(({ time, x, y }) => {
        return <Coin key={time} x={x} y={y} />;
      })}
    </Container>
  );
}
