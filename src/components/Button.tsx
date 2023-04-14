import { styled } from "@linaria/react";

// export const Button = styled.button<{ color: string }>`
/* background-color: ${({ color }) => color}; */
/* border: 1px solid ${({ color }) => color}; */

export const Button = styled.button`
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  color: white;
  background-color: var(--color-primary);
  width: 100px;
  height: 50px;
  cursor: pointer;
  /* 
  &:hover {
    border: 1px solid #05485a;
    background-color: #05485a;
  } */

  &:hover {
    border: 1px solid var(--color-accent);
    background-color: var(--color-accent);
  }

  &:active {
    transform: translateY(2px);
  }
`;
