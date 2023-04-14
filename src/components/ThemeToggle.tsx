type ThemeToggleProps = {
  onToggle: () => void;
};

export const ThemeToggle = ({ onToggle }: ThemeToggleProps) => {
  return <div onClick={onToggle}>Toggle theme</div>;
};
