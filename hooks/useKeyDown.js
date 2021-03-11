import { useEffect, useState } from "react";

const useKeyDown = (keypress, action) => {
  const [keyDown, setKeyDown] = useState(false);

  useEffect(() => {
    const handleKeyDown = ({ key }) => {
      if (key === keypress) {
        setKeyDown(true);
        if (action) action();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [keyDown]);
  return keyDown;
};

export default useKeyDown;
