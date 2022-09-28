import styled from "styled-components";

const Container = styled.button`
  border: 3px solid white;
  background: green;
  text-align: center;
  color: white;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

export default function BetUnit({ count }: { count: string }) {
  return <Container>{count}</Container>;
}
