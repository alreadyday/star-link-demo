import { useRef } from "react";
import styled from "styled-components";
import { useCoinStore } from "../../../store";

const Container = styled.button`
  border: 3px solid rgba(255, 255, 255, 0.3);
  background: green;
  text-align: center;
  line-height: 3;
  color: white;
  &:hover {
    background: darkseagreen;
    cursor: pointer;
  }
`;

export default function Bet({
  className,
  type,
}: {
  className?: string;
  type: string;
}) {
  const store = useCoinStore();
  const ref = useRef<HTMLButtonElement>(null);
  const onClick = () => {
    if (ref.current) {
      const { left, top, height, width } = ref.current.getBoundingClientRect();
      store.addCoin({
        x: left + width / 2,
        y: top + height / 2,
        time: new Date().getTime(),
      });
    }
  };

  return (
    <Container ref={ref} onClick={onClick} className={className}>
      {type}
    </Container>
  );
}
