import { styled } from "@linaria/react";

export const Button = styled.button<{ color: string }>`
  border: 1px solid ${({ color }) => color};
  border-radius: 5px;
  color: white;
  background-color: ${({ color }) => color};
  width: 100px;
  height: 50px;
  cursor: pointer;

  &:hover {
    border: 1px solid #05485a;
    background-color: #05485a;
  }

  &:active {
    transform: translateY(2px);
  }
`;
