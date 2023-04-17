import { styled } from "@linaria/react";

// export const Button = styled.button<{ color: string }>`
/* background-color: ${({ color }) => color}; */
/* border: 1px solid ${({ color }) => color}; */

export const Button = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  background-color: var(--color-primary);
  color: white;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--color-button-primary-background-hover);
    background-color: var(--color-button-primary-background-hover);
  }

  &:active {
    border: 1px solid var(--color-button-primary-background-active);
    background-color: var(--color-button-primary-background-active);
  }
`;
