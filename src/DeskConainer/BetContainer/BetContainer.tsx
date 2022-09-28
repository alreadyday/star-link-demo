import styled from "styled-components";
import Bet from "./Bet";

const Container = styled.div`
  background: green;
  width: 100%;
  height: 170px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const FirstRowBet = styled(Bet)`
  grid-column-start: span 2;
`;
const SecondRowBet = styled(Bet)`
  grid-column-start: span 3;
`;

export default function BetContainer() {
  const betTypeList = ["BP", "T", "PP", "B", "P"];

  return (
    <Container>
      {betTypeList.map((betType, index) => {
        return index < 3 ? (
          <FirstRowBet type={betType} />
        ) : (
          <SecondRowBet type={betType} />
        );
      })}
    </Container>
  );
}
