import { useState } from "react";

export const useToggle = (initialValue = false): [boolean, () => void] => {
  const [state, setState] = useState(initialValue);

  const toggle = () => {
    setState((state) => !state);
  };

  return [state, toggle];
};
