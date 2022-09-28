import styled from "styled-components";
import BetUnit from "./BetUnit";
import CoinMoveContainer from "./CoinMoveContainer";

const CoinListContainer = styled.div`
  background: green;
  width: 100%;
  height: 90px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 20px;
  gap: 20px;
  padding: 20px 10px;
  box-sizing: border-box;
`;

export default function BetContainer() {
  const betUnitCountList = ["10", "10", "20", "30", "40", "50"];

  return (
    <div>
      <CoinMoveContainer />
      <CoinListContainer>
        {betUnitCountList.map((betUnitCount) => {
          return <BetUnit count={betUnitCount} />;
        })}
      </CoinListContainer>
    </div>
  );
}
