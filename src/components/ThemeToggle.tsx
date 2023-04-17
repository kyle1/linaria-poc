import { css } from "@linaria/core";

type ThemeToggleProps = {
  onToggle: () => void;
};

export const ThemeToggle = ({ onToggle }: ThemeToggleProps) => {
  const clickable = css`
    cursor: pointer;
  `;
  return (
    <div className={clickable} onClick={onToggle}>
      Toggle theme
    </div>
  );
};
