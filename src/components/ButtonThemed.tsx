import { styled } from "@linaria/react";

export const ButtonThemed = styled.button`
  border: 1px solid var(--color-accent);
  border-radius: 5px;
  color: white;
  background-color: var(--color-accent);
  width: 100px;
  height: 50px;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--color-accent-hover);
    background-color: var(--color-accent-hover);
  }

  &:active {
    transform: translateY(2px);
  }
`;
