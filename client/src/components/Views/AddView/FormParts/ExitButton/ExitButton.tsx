import React from "react";

import { ExitButton as Button } from "./ExitButton.style";

interface Props {
  handleAddViewChange: () => void;
}

const ExitButton: React.FC<Props> = ({ handleAddViewChange }) => {
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        handleAddViewChange();
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.8 38L10 35.2L21.2 24L10 12.8L12.8 10L24 21.2L35.2 10L38 12.8L26.8 24L38 35.2L35.2 38L24 26.8L12.8 38Z" />
      </svg>
    </Button>
  );
};

export default ExitButton;
