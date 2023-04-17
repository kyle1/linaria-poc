import { css } from "@linaria/core";

export const lightMode = css`
  --color-primary-base: 220, 80%;
  --color-secondary-base: 208, 7%;

  --color-background: hsl(0, 0%, 100%);
  --color-text: hsl(0, 0%, 0%);
  --color-primary: hsl(var(--color-primary-base), 39%);
  --color-secondary: hsl(var(--color-secondary-base), 46%);

  --color-button-primary-background-hover: hsl(var(--color-primary-base), 33%);
  --color-button-primary-background-active: hsl(var(--color-primary-base), 27%);

  background-color: var(--color-background);
  color: var(--color-text);
`;

export const darkMode = css`
  --color-primary-base: 204, 87.6%;
  --color-secondary-base: 208, 7%;

  --color-background: hsl(0, 0%, 0%);
  --color-text: hsla(0, 0%, 100%, 87%);
  --color-primary: hsl(var(--color-primary-base), 52.7%);
  --color-secondary: hsl(var(--color-secondary-base), 46%);

  --color-button-primary-background-hover: hsl(var(--color-primary-base), 46%);
  --color-button-primary-background-active: hsl(var(--color-primary-base), 40%);

  background-color: var(--color-background);
  color: var(--color-text);
`;
